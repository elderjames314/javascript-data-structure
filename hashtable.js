class Hashtable {
    constructor(size=7) {
        this.dataMap = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for(let i = 0;  i< key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }

    set(key, value) {
        let index = this._hash(key)
        if(!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key, value])
        return this
    }

    get(key) {
        let index = this._hash(key)
        if(this.dataMap[index]) {
            for(let i = 0; i < this.dataMap[index].length; i++) {
                if(this.dataMap[index][i][0] === key) return this.dataMap[index][i][1]
            }
        }
        return undefined
    }

    keys() {
        let allKeys = []
        for(let i = 0; i < this.dataMap.length; i++) {
            if(this.dataMap[i]) {
                for(let j = 0; j < this.dataMap[i].length; j++) {

                    allKeys.push(this.dataMap[i][j][0])

                }
            }
            
        }
        return allKeys
    }

    itemInCommon(arr1, arr2) {
        let bucket = {}

        for(let i = 0; i < arr1.length; i++) {
            bucket[arr1[i]] = true
        }

        for(let i = 0; i < arr2.length; i++) {
            if(bucket[arr2[i]]) return true
        }

        return false
    }
}

const hashtable = new Hashtable()
hashtable.set("bolts", 1000)
hashtable.set("washers", 2400)
hashtable.set("nails", 3400)
console.log(hashtable.keys())

arr1 = [1,2, 3]
arr2 = [4, 6, 5]

console.log(hashtable.itemInCommon(arr1, arr2))