import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {
    render() {

        const onSuccess = (payment) =>{ 
           
            console.log(JSON.stringify(payment))

        }

        const onCancel = (data) =>{
            console.log(JSON.stringify(data))
        }

        const onError = (err) => {
            console.log(JSON.stringify(err))
        }

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.toPay;

        const client = {
            sandbox:'AT8B6ypECxehX74jYut5avxOzlT0V7CDLdDsZ8mMFk14eP9xUiMVSx4g_M-pfsdxf_1uCBw8t_AeCUhd',
            production:''
        }
        
       

        
        return (
            <div>
                <PaypalExpressBtn
                    env={env}
                    client={client}
                    currency={currency}
                    total={total}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                    style={{
                        size:'large',
                        color: 'blue',
                        shape: 'rect',
                        label: 'checkout'
                    }}
                
                />
            </div>
        );
    }
}

export default Paypal;