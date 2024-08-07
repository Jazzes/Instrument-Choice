// const url = "https://admin.fimbo.ru"

const url = "http://localhost:5005"

const xmlnsPath = "http://www.w3.org/2000/svg"

let HOST

let counter = 0

let fimbos = []

let designLikes = [], soundLikes = [], lessonLikes = [], soulLikes = []

const Loader = (type = false) => {
    if (type && !document.querySelector(".LLoader")) {
        const div = document.createElement('div')
        div.classList.add('LLoader')
        const load = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        load.innerHTML = `<circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>`
        load.classList.add('spinner')
        load.setAttribute('viewBox', "0 0 50 50")
        div.append(load)
        document.querySelector(`.loaderr`).append(div)
    } else {
        if (counter === 0) {
            document.querySelector(".LLoader").remove()
        }
    }
}

class HTTP {
    setLocItem(name, value) {
        localStorage.setItem(name, value)
    }

    getLocItem(name) {
        let ans = localStorage.getItem(name);
        return ans ? ans : null;
    }

    showError() {
        const prev = document.getElementById('errorMessageFetch')
        if (prev)
            prev.remove()

        const div = document.createElement('div')
        div.id = "errorMessageFetch"
        div.textContent = "Что-то пошло не так. Возможно проблемы с интернетом или включен VPN."
        div.classList.add("errorMessageFetch")
        div.addEventListener("click", () => {
            div.remove()
        })

        document.getElementById("RooT").append(div)

        setTimeout(() => {
            div.remove()
        }, 5000)
    }
}

const http = new HTTP()

class Fetches {

    async fetchHos() {
        let lt = await (await fetch(`${url}/api/DuVIapjbeuJgx/ythCdUeHsWapspB`)).json()
        const s = 909 - 823 < 909 - 754 ? 6 + (888 - 823 > 10 ? 677 : 42) : String("2") + "9"
        let p = lt.map(ent => String.fromCodePoint(ent - s))
        p = JSON.parse(p.join(''))
        if (p) {
            --counter
            Loader()
        }
        return p.TeWDNuXuutciCgR
    }

    async fetchFimbos() {
        let lt = await (await fetch(`${url}/api/OerchX/YrhBB`, {
            headers: {"client-token": http.getLocItem("clientToken")}
        })).json()
        const s = 909 - 823 < 909 - 754 ? 6 + (888 - 823 > 10 ? 677 : 42) : String("2") + "9"
        let p = lt.map(ent => String.fromCodePoint(ent - s))
        p = JSON.parse(p.join(''))
        if (p) {
            --counter
            Loader()
        }
        return p
    }

    async getToken() {
        let lt = await (await fetch(`${url}/api/tUmrT/rDlawrn`)).json()
        const s = 909 - 823 < 909 - 754 ? 6 + (888 - 823 > 10 ? 677 : 42) : String("2") + "9"
        let p = lt.map(ent => String.fromCodePoint(ent - s))
        p = JSON.parse(p.join(''))
        if (p) {
            --counter
            Loader()
        }
        return p
    }

    async getLikes(type) {
        let lt = await (await fetch(`${url}/api/tUmrT/EJKSIdk?ksOxXXWwF=${type}`, {
            headers: {
                "client-token": http.getLocItem("clientToken")
            }
        })).json()
        const s = 909 - 823 < 909 - 754 ? 6 + (888 - 823 > 10 ? 677 : 42) : String("2") + "9"
        let p = lt.map(ent => String.fromCodePoint(ent - s))
        p = JSON.parse(p.join(''))
        if (p) {
            --counter
            Loader()
        }
        return p
    }

}

const fetc = new Fetches()

class ProgressBar {
    type = 0
    url = "https://fimbo.ru"

    circDes = document.getElementById("circDes")
    circSound = document.getElementById("circSound")
    circTrack = document.getElementById("circTrack")
    circSoul = document.getElementById("circSoul")

    cifra = document.getElementById("cifraProgBa")
    cifraPercent = document.getElementById("circProgSVG")
    textNext = document.getElementById("nextProgA")

    prog = 0

    getSizeProg() {
        switch (this.prog) {
            case 0:
                return ``
            case 1:
                return `<path d="M24.7238 89.9878C21.8217 93.4465 16.6094 93.9328 13.6232 90.5465C7.87465 84.0275 3.74121 76.196 1.61923 67.6861C-0.502759 59.1763 -0.530281 50.3209 1.48452 41.8661C2.53113 37.4742 7.36154 35.4563 11.5478 37.1475C15.734 38.8387 17.66 43.6085 16.8977 48.0586C16.0105 53.2379 16.1979 58.5747 17.4835 63.7303C18.769 68.8859 21.1093 73.6858 24.3244 77.8422C27.0869 81.4134 27.6258 86.5291 24.7238 89.9878Z" fill="#FF5656"/>`
            case 2:
                return `<path d="M24.7238 89.9878C21.8217 93.4465 16.6094 93.9328 13.6232 90.5465C7.87465 84.0275 3.74122 76.196 1.61923 67.6861C-1.16541 56.5188 -0.343225 44.7566 3.96794 34.0853C8.27911 23.414 15.8579 14.3814 25.6182 8.28214C33.0558 3.63432 41.4692 0.871692 50.1328 0.175197C54.6332 -0.186606 58.0451 3.78382 57.7302 8.28776V8.28776C57.4154 12.7917 53.4742 16.0974 49.0064 16.7476C43.8064 17.5043 38.7887 19.3317 34.2827 22.1475C27.4506 26.417 22.1454 32.7398 19.1276 40.2097C16.1097 47.6796 15.5342 55.9132 17.4835 63.7303C18.769 68.8859 21.1093 73.6858 24.3244 77.8422C27.0869 81.4134 27.6258 86.5291 24.7238 89.9878V89.9878Z" fill="#FF9D56"/>`
            case 3:
                return `<path d="M24.7238 89.9878C21.8217 93.4465 16.6096 93.9329 13.6234 90.5465C9.76687 86.1732 6.62524 81.1959 4.33304 75.7962C0.972288 67.8793 -0.467068 59.2794 0.13266 50.6997C0.732387 42.12 3.35417 33.804 7.78365 26.4316C12.2131 19.0593 18.3245 12.84 25.6182 8.28214C32.9119 3.72428 41.1807 0.957336 49.7486 0.207512C58.3165 -0.542305 66.9403 0.746292 74.9147 3.96795C82.8892 7.18961 89.988 12.2529 95.6307 18.7437C99.4793 23.1708 102.576 28.1763 104.816 33.5595C106.551 37.7278 103.829 42.1994 99.4487 43.2918C95.0679 44.3842 90.706 41.6575 88.7071 37.6092C87.2633 34.6853 85.4457 31.9485 83.2915 29.4706C79.3416 24.927 74.3725 21.3827 68.7903 19.1276C63.2082 16.8724 57.1716 15.9704 51.174 16.4953C45.1765 17.0201 39.3883 18.957 34.2827 22.1475C29.1772 25.338 24.8992 29.6915 21.7986 34.8521C18.6979 40.0128 16.8627 45.834 16.4429 51.8398C16.0231 57.8456 17.0306 63.8655 19.3831 69.4073C20.6661 72.4296 22.3293 75.263 24.3245 77.8422C27.087 81.4134 27.6258 86.5291 24.7238 89.9878Z" fill="#42CA3F"/>`
            case 4:
                return `<path d="M25.0238 90.2373C22.1509 93.7204 16.9429 94.2506 13.9283 90.8895C8.31648 84.6326 4.20205 77.133 1.95279 68.9582C-1.02294 58.1432 -0.589149 46.6734 3.19496 36.1141C6.97906 25.5547 13.9291 16.4201 23.0968 9.95689C32.2644 3.49363 43.2031 0.0165239 54.42 5.87154e-05C65.6369 -0.0164065 76.5857 3.42857 85.7723 9.86489C94.9589 16.3012 101.936 25.4153 105.751 35.9635C109.566 46.5117 110.033 57.9802 107.089 68.8039C104.864 76.9852 100.772 84.4969 95.1783 90.7702C92.1736 94.1401 86.9641 93.6252 84.081 90.1506V90.1506C81.198 86.6761 81.765 81.5634 84.547 78.0074C87.6619 74.026 89.9716 69.443 91.3126 64.5127C93.3734 56.9361 93.0462 48.9082 90.3756 41.5245C87.705 34.1407 82.8212 27.7608 76.3906 23.2554C69.96 18.75 62.2958 16.3385 54.444 16.35C46.5922 16.3616 38.9351 18.7955 32.5178 23.3198C26.1004 27.8441 21.2353 34.2383 18.5865 41.6299C15.9376 49.0214 15.6339 57.0502 17.717 64.6208C19.0724 69.5471 21.3956 74.1232 24.5221 78.0955C27.3145 81.6434 27.8966 86.7543 25.0238 90.2373V90.2373Z" fill="#42CA3F"/>`
            default:
                return ``
        }
    }

    linkToNext(Design, Sound, Lesson, Soul) {
        const linkToNext = document.getElementById("nextProgA")

        const mainURL = this.url + "/fimbo-choice-main"
        const desURL = this.url + "/fimbo-choice-design"
        const soundURL = this.url + "/fimbo-choice-sound"
        const trackURL = this.url + "/fimbo-choice-cover"
        const soulURL = this.url + "/fimbo-choice-soul"

        switch (this.type) {
            case 0:
                if (Design.length === 0) {
                    linkToNext.href = desURL
                } else if (Sound.length === 0) {
                    linkToNext.href = soundURL
                } else if (Lesson.length === 0) {
                    linkToNext.href = trackURL
                } else if (Soul.length < 3) {
                    linkToNext.href = soulURL
                } else {
                    linkToNext.href = mainURL
                }
                break
            case 1:
                if (Sound.length === 0) {
                    linkToNext.href = soundURL
                } else if (Lesson.length === 0) {
                    linkToNext.href = trackURL
                } else if (Soul.length < 3) {
                    linkToNext.href = soulURL
                } else {
                    linkToNext.href = mainURL
                }
                break
            case 2:
                if (Lesson.length === 0) {
                    linkToNext.href = trackURL
                } else if (Soul.length < 3) {
                    linkToNext.href = soulURL
                } else if (Design.length === 0) {
                    linkToNext.href = desURL
                } else {
                    linkToNext.href = mainURL
                }
                break
            case 3:
                if (Soul.length < 3) {
                    linkToNext.href = soulURL
                } else if (Design.length === 0) {
                    linkToNext.href = desURL
                } else if (Sound.length === 0) {
                    linkToNext.href = soundURL
                } else {
                    linkToNext.href = mainURL
                }
                break
            case 4:
                if (Design.length === 0) {
                    linkToNext.href = desURL
                } else if (Sound.length === 0) {
                    linkToNext.href = soundURL
                } else if (Lesson.length === 0) {
                    linkToNext.href = trackURL
                } else {
                    linkToNext.href = mainURL
                }
                break
            default:
                if (Design.length === 0) {
                    linkToNext.href = desURL
                } else if (Sound.length === 0) {
                    linkToNext.href = soundURL
                } else if (Lesson.length === 0) {
                    linkToNext.href = trackURL
                } else if (Soul.length < 3) {
                    linkToNext.href = soulURL
                } else {
                    linkToNext.href = mainURL
                }
                break
        }


    }

    async initialization() {

        switch (this.type) {
            case 1:
                this.circDes.classList.add("progressBarr__row__item__circ__process")
                break
            case 2:
                this.circSound.classList.add("progressBarr__row__item__circ__process")
                break
            case 3:
                this.circTrack.classList.add("progressBarr__row__item__circ__process")
                break
            case 4:
                this.circSoul.classList.add("progressBarr__row__item__circ__process")
                break
            default:
                break
        }

        if (designLikes.length > 0) {
            ++this.prog
            this.circDes.classList.add("progressBarr__row__item__circ__done")
            if (this.type === 1) {
                this.textNext.textContent = "Продолжить"
            }
        }
        if (soundLikes.length > 0) {
            ++this.prog
            this.circSound.classList.add("progressBarr__row__item__circ__done")
            if (this.type === 2) {
                this.textNext.textContent = "Продолжить"
            }
        }
        if (lessonLikes.length > 0) {
            ++this.prog
            this.circTrack.classList.add("progressBarr__row__item__circ__done")
            if (this.type === 3) {
                this.textNext.textContent = "Продолжить"
            }
        }
        if (soulLikes.length === 3) {
            ++this.prog
            this.circSoul.classList.add("progressBarr__row__item__circ__done")
            if (this.type === 4) {
                this.textNext.textContent = "Продолжить"
            }
        }

        if (this.prog === 4 ||
            (this.prog === 3 && (
                (this.type === 1 && designLikes.length === 0) ||
                (this.type === 2 && soundLikes.length === 0) ||
                (this.type === 3 && lessonLikes.length === 0) ||
                (this.type === 4 && soulLikes.length !== 3)
            ))
        ) {
            this.textNext.textContent = "К результатам"
        }

        this.changeCifra()

        this.linkToNext(designLikes, soundLikes, lessonLikes, soulLikes)

    }

    changeCifra() {
        switch (this.prog) {
            case 0:
                this.cifraPercent.children[1].innerHTML = this.getSizeProg()
                this.cifra.textContent = "0"
                break
            case 1:
                this.cifraPercent.children[1].innerHTML = this.getSizeProg()
                this.cifra.textContent = "25"
                break
            case 2:
                this.cifraPercent.children[1].innerHTML = this.getSizeProg()
                this.cifra.textContent = "50"
                break
            case 3:
                this.cifraPercent.children[1].innerHTML = this.getSizeProg()
                this.cifra.textContent = "75"
                break
            case 4:
                this.cifraPercent.children[1].innerHTML = this.getSizeProg()
                this.cifra.textContent = "100"
                break
            default:
                break
        }
    }

    addProg() {
        ++this.prog
        this.changeCifra()
        if (this.prog === 4)
            this.textNext.textContent = "К результатам"
        else
            this.textNext.textContent = "Продолжить"
    }

    delProg() {
        --this.prog
        this.changeCifra()
        if (this.prog === 3 && (
            (this.type === 1 && designLikes.length === 0) ||
            (this.type === 2 && soundLikes.length === 0) ||
            (this.type === 3 && lessonLikes.length === 0) ||
            (this.type === 4 && soulLikes.length !== 3)
        )) {
            this.textNext.textContent = "К результатам"
        } else
            this.textNext.textContent = "К следующему тесту"
    }

    checkProg() {

        switch (this.type) {
            case 1:
                if (designLikes.length > 0) {
                    if (!this.circDes.classList.contains("progressBarr__row__item__circ__done")) {
                        this.circDes.classList.add("progressBarr__row__item__circ__done")
                        this.addProg()
                    }
                } else {
                    this.circDes.classList.add("progressBarr__row__item__circ__process")
                    this.circDes.classList.remove("progressBarr__row__item__circ__done")
                    this.delProg()
                }
                break
            case 2:
                if (soundLikes.length > 0) {
                    if (!this.circSound.classList.contains("progressBarr__row__item__circ__done")) {
                        this.circSound.classList.add("progressBarr__row__item__circ__done")
                        this.addProg()
                    }
                } else {
                    this.circSound.classList.add("progressBarr__row__item__circ__process")
                    this.circSound.classList.remove("progressBarr__row__item__circ__done")
                    this.delProg()
                }
                break
            case 3:
                if (lessonLikes.length > 0) {
                    if (!this.circTrack.classList.contains("progressBarr__row__item__circ__done")) {
                        this.circTrack.classList.add("progressBarr__row__item__circ__done")
                        this.addProg()
                    }
                } else {
                    this.circTrack.classList.add("progressBarr__row__item__circ__process")
                    this.circTrack.classList.remove("progressBarr__row__item__circ__done")
                    this.delProg()
                }
                break
            case 4:
                if (soulLikes.length === 3) {
                    if (!this.circSoul.classList.contains("progressBarr__row__item__circ__done")) {
                        this.circSoul.classList.add("progressBarr__row__item__circ__done")
                        this.addProg()
                    }
                } else {
                    this.circSoul.classList.add("progressBarr__row__item__circ__process")
                    this.circSoul.classList.remove("progressBarr__row__item__circ__done")
                }
                break
        }

    }
}

const InitProgress = new ProgressBar()

class Client {

    async tokenInit() {
        const token = http.getLocItem("clientToken")
        if (!token) {
            await fetc.getToken().then((resp) => {
                http.setLocItem("clientToken", resp.token)

                InitProgress.initialization()
            }).catch(() => {
                http.showError()
            })
        } else {
            await fetc.getLikes(1).then((response) => {
                designLikes = response.likes.fimboDesignLikes
                soundLikes = response.likes.fimboSoundLikes
                lessonLikes = response.likes.lessonLikes
                soulLikes = response.likes.soulAnswers
                InitProgress.initialization()
            }).catch(() => {
                http.showError()
            })
        }
    }

}

const InitClient = new Client()

class Actions {
    static initWindow() {
        let send = false

        const back = document.getElementById("BackWithWindow")

        document.getElementById("getPromoC").addEventListener("click", () => {
            back.style.display = "flex"
        })

        back.addEventListener("click", () => {
            back.style.display = "none"
        })

        const cross = document.getElementById("CrossToClose")
        cross.addEventListener("click", () => {
            back.style.display = "none"
        })

        const window = document.getElementById("windowWithText")
        window.addEventListener("click", (e) => {
            e.stopPropagation()
        })

        const phone = document.getElementById('phoneInP')

        $("#phoneInP").mask("+7(999)999-99-99");

        const buttonSend = document.getElementById("sendNumForProm")
        buttonSend.addEventListener("click", () => {
            if (!send && phone.value) {
                buttonSend.textContent = "Отправлено"
                send = true
                console.log(phone.value)
            }
        })
    }

    static windowFimbo(ent, index) {
        const container = document.querySelector(".backs")

        const back = document.createElement('div')
        back.classList.add("BackWithWindow")
        back.style.display = "none"

        ent.addEventListener("click", () => {
            back.style.display = "flex"
        })
        back.addEventListener("click", () => {
            back.style.display = "none"
        })

        const cross = document.createElementNS(xmlnsPath, 'svg')
        cross.innerHTML = `
        <path d="M1.6665 1.6665L34.3332 34.3332" stroke="black" stroke-width="3"
                          stroke-linecap="round"/>
                    <path d="M1.6665 34.333L34.3332 1.66634" stroke="black" stroke-width="3"
                          stroke-linecap="round"/>
        `
        cross.setAttribute('heignt', '22')
        cross.setAttribute('width', '22')
        cross.setAttribute('viewBox', '0 0 36 36')
        cross.classList.add("CrossToClose")
        cross.addEventListener("click", () => {
            back.style.display = "none"
        })

        const window = document.createElement("div")
        window.classList.add("windowWithReason")
        window.addEventListener("click", (e) => {
            e.stopPropagation()
        })

        if (fimbos[index].des){
            const div = document.createElement('div')
            div.textContent = fimbos[index].des
            window.append(div)
        }
        if (fimbos[index].snd){
            const div = document.createElement('div')
            div.textContent = fimbos[index].snd
            window.append(div)
        }
        fimbos[index].sl.forEach((ent) => {
            const div = document.createElement('div')
            div.textContent = ent
            window.append(div)
        })

        const button = document.createElement('a')
        button.classList.add("blackButtonBe")
        button.textContent = "Купить"
        button.href = fimbos[index].bu


        window.append(cross, button)
        back.append(window)
        container.append(back)

    }
}

class Listeners {

    constructor() {
        this.lisGetPromo()
    }

    lisGetPromo() {
        Actions.initWindow()
    }

    fimboReasonClick() {
        const el = [
            document.querySelector(".fim__block__1"),
            ...document.querySelectorAll('.fim__block__4__item')
        ]
        for (let i = 0; i < el.length; ++i){
            Actions.windowFimbo(el[i], i)
        }

    }


}

const Listener = new Listeners()

class Elements {

    showResult(fimbos) {
        if (!(fimbos === "In process")) {
            this.showFimbos(fimbos)
            Listener.fimboReasonClick()
            this.changePrice()
        }
    }

    showFimbos(fimbos) {
        document.getElementById("firstFimboName").textContent = fimbos[0].na
        document.getElementById("secondFimboName").textContent = fimbos[1].na
        document.getElementById("thirdFimboName").textContent = fimbos[2].na
        document.getElementById("fourthFimboName").textContent = fimbos[3].na
        document.getElementById("fifthFimboName").textContent = fimbos[4].na

        document.getElementById("1FimboImg").src = `${HOST}/files/cover/${fimbos[0].pa}/${fimbos[0].im}`
        document.getElementById("2FimboImg").src = `${HOST}/files/cover/${fimbos[1].pa}/${fimbos[1].im}`
        document.getElementById("3FimboImg").src = `${HOST}/files/cover/${fimbos[2].pa}/${fimbos[2].im}`
        document.getElementById("4FimboImg").src = `${HOST}/files/cover/${fimbos[3].pa}/${fimbos[3].im}`
        document.getElementById("5FimboImg").src = `${HOST}/files/cover/${fimbos[4].pa}/${fimbos[4].im}`
    }

    changePrice() {
        document.getElementById("sizeOfSale").textContent = "1000₽"

        document.getElementById("textToContactManager").textContent = "Обратитесь к менеджеру за промокодом! Если Вам не пришел промокод - напишите нам!"
    }

}

const El = new Elements()

const start = async () => {
    Loader(true)
    counter += 3

    InitClient.tokenInit().then(async () => {
        HOST = await fetc.fetchHos()

        fimbos = await fetc.fetchFimbos()

        console.log(fimbos)

        El.showResult(fimbos)
    })


}

const createMessageTechSupport = () => {
    document.querySelector('.RooT').remove()
    document.querySelector(".TechSupport").style.display = "block"
}

const checkForTechnicalSupport = async () => {
    try {
        const response = await fetch(url)
        if (response.status === 200) {
            start()
        } else {
            createMessageTechSupport()
        }
    } catch (e) {
        createMessageTechSupport()
    }
}

checkForTechnicalSupport()