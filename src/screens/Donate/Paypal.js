import axios from 'axios'
import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    Text
} from 'react-native'
import WebView from 'react-native-webview'

export default class Paypal extends Component {

    state = {
        accessToken: null,
        approvalUrl: null,
        paymentId: null
    }


    componentDidMount() {
        console.warn(this.props.route.params.valuePrice)
        const dataDetail = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "transactions": [{
                "amount": {
                    "total":  this.props.route.params.valuePrice,
                    "currency": "USD",
                    "details": {
                        "subtotal": this.props.route.params.valuePrice,
                        "tax": "0",
                        "shipping": "0",
                        "handling_fee": "0",
                        "shipping_discount": "0",
                        "insurance": "0"
                    }
                }

            }],
            "redirect_urls": {
                "return_url": "https://example.com",
                "cancel_url": "https://example.com"
            }
        }


        fetch('https://api-m.paypal.com/v1/oauth2/token',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer A21AANCIjmHofUqMT2dod6OwslPtCURp4fiHkGH4FeZTb_RuvQ6BBr4gMRYbeMFi_q3DCf54qcIC1zwtwnq5ba8IWN7CghMog'
                },
                body: 'grant_type=client_credentials'
            }



        ).then(res => res.json())
            .then(response => {
                console.log("response===>", response)
                this.setState({ accessToken: response.access_token })
                fetch('https://api-m.paypal.com/v1/payments/payment',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${this.state.accessToken}`
                        },
                        body: JSON.stringify(dataDetail)
                    }
                ).then(res => res.json())
                    .then(response => {
                        console.log("response", response)
                        const { id, links } = response
                        const approvalUrl = links.find(data => data.rel == "approval_url")
                        this.setState({
                            paymentId: id,
                            approvalUrl: approvalUrl.href
                        })
                    }).catch(err => {
                        console.log({ ...err })
                    })
            }).catch(err => {
                console.log({ ...err })
            })
    }

    _onNavigationStateChange = (webViewState) => {

        if (webViewState.url.includes('https://example.com/')) {

            this.setState({
                approvalUrl: null
            })

            const { PayerID, paymentId } = webViewState.url

            fetch(`https://api-m.paypal.com/v1/payments/payment/${paymentId}/execute`, {
                method: 'POST',
                body: { payer_id: PayerID },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.state.accessToken}`
                }
            }).then(res => res.json())
                .then(response => {
                    console.log('payment_response', response)
                    console.warn('payment_response', response)
                    if (response.name === 'INVALID_RESOURCE_ID') {
                        alert('payment Field try again!')
                        this.setState({ approvalUrl: null })
                        this.props.navigation.pop()
                    } else {
                        var formData = new FormData();
                        formData.append('appeal',this.props.route.params.appeal);
                        formData.append('inMemoryOf', this.props.route.params.memoryOf);
                        formData.append('inHonorOf', this.props.route.params.honorOf);
                        formData.append('priceAmount', this.props.route.params.valuePrice);
                        formData.append('name', this.props.route.params.fname+' '+this.props.route.params.lname);
                        formData.append('address', this.props.route.params.address);
                        formData.append('city', this.props.route.params.city);
                        formData.append('state', this.props.route.params.state);
                        formData.append('zip', this.props.route.params.zip);
                        formData.append('country', this.props.route.params.country);
                        formData.append('phone', this.props.route.params.phone);
                         axios
                            .post('donor_data')
                            .then((response) => {
                                this.props.navigation.pop()
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }

                   

                }).catch(err => {
                    console.warn({ ...err })
                })
        }
    }

    render() {
        const { approvalUrl } = this.state
        return (
            <View style={{ flex: 1 }}>
                {
                    approvalUrl ? <WebView
                        style={{ height: '100%', width: '100%' }}
                        source={{ uri: approvalUrl }}
                        onNavigationStateChange={this._onNavigationStateChange}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={false}
                    /> : <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text
                            style={{ color: 'black', fontSize: 24, padding: 10, textAlign: 'center' }}>
                            Do not press back or refresh page
                        </Text>
                        <ActivityIndicator
                            color={'black'} size={'large'} />
                    </View>
                }
            </View>
        )
    }
}