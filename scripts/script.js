// script

const { createApp } = Vue; 

createApp (
    {
        data() {
            return {
                i: 0,
                slide: [
                    {
                        image: './img/01.webp',
                        title: 'swag title',
                        text: 'swag text'
                    },
                    {
                        image: './img/02.webp',
                        title: 'swag title',
                        text: 'swag text'
                    },
                    {
                        image: './img/03.webp',
                        title: 'swag title',
                        text: 'swag text'
                    },
                    {
                        image: './img/04.webp',
                        title: 'swag title',
                        text: 'swag text'
                    },
                    {
                        image: './img/05.webp',
                        title: 'swag title',
                        text: 'swag text'
                    },
                ],
                timer: 3,
                boolean: false,
                pausa: false
            };
        },
        methods: {
            prevSlide() {
                if (this.i == 0){
                    this.i = 4;
                } else {
                    this.i --;
                }
            },
            nextSlide() {
                if (this.i == 4) {
                    this.i = 0;
                }else {
                    this.i ++; 
                }
            },
            clicker(joshua) {
                this.i = joshua;
            },
            timerStart() {
                this.timer = 3;
                console.log("tempo mancante: " + this.timer);

                if (this.timer > 0) {
                    this.boolean = true;

                    const contatore = () => {
                        if (this.timer > 0) {
                            if (!this.pausa) {
                                setTimeout(() => {
                                    this.timer --;
                                    console.log("tempo mancante: " + this.timer);
                                    contatore();
                                }, 1000);
                            } else {
                                console.log('in pausa');
                            }
                        } else {
                            this.boolean = false;
                            console.log("prossimo");
                            this.timer = 3;
                            if (this.i == 4) {
                                this.i = 0;
                            }else {
                                this.i ++; 
                            }
                            this.timerStart();
                        }
                    };
                    contatore();
                }
            },
            pausa1() {
                this.pausa = true;
                console.log('funziona?');
            },
            riprendi() {
                this.pausa = false;
                console.log('riprende?');
                if (this.boolean) {
                   this.timerStart(); 
                }
            }
        }
    }
).mount('#app');























