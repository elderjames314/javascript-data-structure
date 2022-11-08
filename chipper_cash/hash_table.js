

class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    get(key) {
        let index = this._hash(key);
        if(this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {  
                if(this.dataMap[index][i][0]=== key) return this.dataMap[index][i][1];  
            }
        }
        return undefined;
    }

    keys() {
       // console.log(this.dataMap)
        let all_keys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if(this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    console.log(this.dataMap[i][j])
                    all_keys.push(this.dataMap[i][j][0])
                }
            }
        }
       // return all_keys;
    }

    values() {
        let all_values = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if(this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    
                    all_values.push(this.dataMap[i][j][1])
                }
            }
        }
        return all_values;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, value]);
        return this;

    }

    _hash(key) {
        let hash = 0;
        for (let index = 0; index < this.dataMap.length; index++) {  
          hash = (hash + key.charCodeAt(index) * 23) % this.dataMap.length;  
        }
        return hash
    }
}

const hashTable = new HashTable();
hashTable.set("bolts566", 89)
hashTable.set("james900", 45);
hashTable.set("olaolki", 65);
hashTable.set("washers", 32);
hashTable.set("bolts", 99);

console.log(hashTable.keys())
