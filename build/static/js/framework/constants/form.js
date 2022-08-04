export const FORM_SCHEME = {
    YOUR_WALLET:    { title: 'Your wallet address', value: '', unit: '',                      hidden: true,  locked: false, lockDisabled: true },
    YOUR_ID:        { title: 'Your payment ID',     value: '@',                                        unit: '',                      hidden: true,  locked: false, lockDisabled: true },
    AMOUNT:         { title: 'Amount',              value: '',                                           unit: 'EvoX', type: 'number',  hidden: false, locked: true,  lockDisabled: false },
    DESCRIPTION:    { title: 'Description',         value: '',                          unit: '',                      hidden: false, locked: true,  lockDisabled: false },
    COMMENT:        { title: 'Comment',             value: '',                                             unit: '',                      hidden: false, locked: false, lockDisabled: false },
    YOUR_DEPOSIT:   { title: 'Your deposit',        value: '',                                            unit: 'EvoX',  type: 'number', hidden: false, locked: true,  lockDisabled: false },
    BUYER_DEPOSIT:  { title: 'Buyer deposit',       value: '',                                           unit: 'EvoX',  type: 'number', hidden: false, locked: true,  lockDisabled: false },
    FEE:            { title: 'Fee',                 value: '',                                         unit: 'EvoX',  type: 'number', hidden: true,  locked: false, lockDisabled: true },
    RESPONSE_TIME:  { title: 'You response time',   value: '',                                           unit: 'hours', type: 'number', hidden: true,  locked: false, lockDisabled: true },
    LOGO:           { title: 'EvoX logo',           visible: true }
  };