module.exports = shipit => {
    shipit.initConfig({
        default: {
            key: '/Users/isez/.ssh/id_rsa'
        },
        staging: {
            servers: 'root@45.78.58.194:27438'
        },
        development: {
            servers: 'root@139.196.207.229'
        }
    });

    shipit.task('deploy:development', ()=>{
        return shipit.remoteCopy(__dirname + '/build/', '/root/webroot/qixi').then(res => console.log(res[0].stdout));
    });
};