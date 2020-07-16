function Promise(exector) {
    let self = this;
    let status = 'pending'
    let value = undefined;
    let reason = undefined;

    function resolve(value) {
        self.status = 'resolve'
        self.value = value;
    }

    function reject(reason) {
        self.status = 'reject'
        self.reason = reason
    }

    try {
        exector(resolve, reject)
    } catch (err) {
        reject(err)
    }
    
    Promise.prototype.then = function(resolve, reject) {
        let self = this;
        if(self.status == 'resolve') {
            resolve(self.value)
        }
        if(self.status == 'reject') {
            reject(self.reason)
        }
    }
}