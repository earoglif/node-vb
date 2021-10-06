const vb = require( 'virtualbox' );

vb.start('Win10x32', true, error => {
    if (error) throw error;
    console.log('Win10x32 запущен!');
});