class UF {
    constructor(n) {
        this.count = n; // 初始连同分量的数量
        this.parent = new Array(n); // 初始化的时候每个元素的父元素都是自己，这符合自反性
        // 初始化'重量'数组，目的是进行平衡性优化，防止只是单纯的小节点连接到大节点造成节点分组不平衡
        this.size = new Array(n);
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }

    /**
     * 连接两个节点
     * @param p
     * @param q
     */
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
        // 连接之后连通分量减1
        this.count--;
    }

    /**
     * 进行路径压缩
     * @param x
     * @returns {*}
     */
    find(x) {
        while (this.parent[x] !== x) {
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x;
    }

    /**
     * 返回当前连通分量的数量
     * @returns {*}
     */
    countNum() {
        return this.count;
    }

    /**
     * 判断两个节点是否连通
     * @param p
     * @param q
     * @returns {boolean}
     */
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
