class PrintThread1 {
    constructor(name) {
        this.name = name;
    }

    run() {
        for (let i = 1; i < 100; i++) {
            setTimeout(() => {
                process.stdout.write(this.name);
            }, 1000 * i);
        }
    }
}

const a = new PrintThread1("*");
const b = new PrintThread1("-");
const c = new PrintThread1("=");

a.run();
b.run();
c.run();
