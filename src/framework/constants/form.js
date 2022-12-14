export const FORM_SCHEME = {
  YOUR_WALLET:    { title: 'Your wallet address', value: 'XXXXxxxxXXXXxxxxXXXXxxxxXXXXxxxxXXXXxxxxXXXX', unit: '',                      hidden: true,  locked: false, lockDisabled: true },
  YOUR_ID:        { title: 'Your payment ID',     value: '@test',                                        unit: '',                      hidden: true,  locked: false, lockDisabled: true },
  AMOUNT:         { title: 'Amount',              value: '15',                                           unit: 'EvoX', type: 'number',  hidden: false, locked: true,  lockDisabled: false },
  DESCRIPTION:    { title: 'Description',         value: 'RX 580 (ITM: 67214)',                          unit: '',                      hidden: false, locked: true,  lockDisabled: false },
  COMMENT:        { title: 'Comment',             value: '',                                             unit: '',                      hidden: false, locked: false, lockDisabled: false },
  YOUR_DEPOSIT:   { title: 'Your deposit',        value: '5',                                            unit: 'EvoX',  type: 'number', hidden: false, locked: true,  lockDisabled: false },
  BUYER_DEPOSIT:  { title: 'Buyer deposit',       value: '15',                                           unit: 'EvoX',  type: 'number', hidden: false, locked: true,  lockDisabled: false },
  FEE:            { title: 'Fee',                 value: '0.01',                                         unit: 'EvoX',  type: 'number', hidden: true,  locked: false, lockDisabled: true },
  RESPONSE_TIME:  { title: 'You response time',   value: '12',                                           unit: 'hours', type: 'number', hidden: true,  locked: false, lockDisabled: true },
  LOGO:           { title: 'EvoX logo',           visible: true }
};
