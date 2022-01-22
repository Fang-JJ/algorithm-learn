class UF {
    constructor(n) {
        this.count = n; // 初始连同分量的数量
        this.parent = new Array(n); // 初始化的时候每个元素的父元素都是自己，这符合自反性
        this.size = new Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.size[i] = i;
        }
    }

    union(p, q) {
        const rootP = this.find(p);
        const rootQ = this.find(q);
        if (rootP === rootQ) return;
        // parent[rootP] = rootQ;
        if (this.size[rootP] > this.size[rootQ]) {
            this.parent[rootQ] = rootP;
            this.size[rootP] += this.size[rootQ];
        } else {
            this.parent[rootP] = rootQ;
            this.size[rootQ] += this.size[rootP];
        }
        this.count--;
    }

    find(x) {
        while (this.parent[x] !== x) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }

    countNum() {
        return this.count;
    }

    connected(p, q) {
        const rootQ = this.find(q);
        const rootP = this.find(p);
        return rootP === rootQ;
    }
}

let n = 5;
let edges = [[0, 1], [1, 2], [2, 3], [3, 4]];
const uf = new UF(n);
for (let edge of edges) {
    uf.union(edge[0], edge[1]);
}
console.log(uf.countNum()); // 1
