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

    updateSearchParams = (urlT, paramT, valueT) => {
        let searchParams = new URLSearchParams(new URL(urlT).search)
        searchParams.set(paramT, valueT)
        return urlT.split('?')[0] + '?' + searchParams.toString()
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
        let lt = await (await fetch(`${url}/api/OerchX/wetKsfeGy`)).json()
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

    async setLike(id, type, block, like) {
        let lt = await (await fetch(`${url}/api/tUmrT/shceO`, {
            headers: {
                "Content-Type": "application/json",
                "client-token": http.getLocItem("clientToken"),
            },
            method: "POST",
            body: JSON.stringify({
                iPHHRPme: id, fAOUSyT: block, ksOxXXWwF: type, YARcxwU: like
            })
        })).json()
        const s = 909 - 823 < 909 - 754 ? 6 + (888 - 823 > 10 ? 677 : 42) : String("2") + "9"
        let p = lt.map(ent => String.fromCodePoint(ent - s))
        p = JSON.parse(p.join(''))

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
    type = 1
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
        )){
            this.textNext.textContent = "К результатам"
        }
        else
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
    initURL() {
        const curURL = new URL(window.location)

        let type
        for (let [name, value] of curURL.searchParams) {
            if (name === "type") {
                type = value
            }
        }

        if (type === "the-best") {
            setTimeout(() => {
                document.getElementById("FimboTin").style.display = "flex"

                document.getElementById("switch-btnFC").classList.toggle("switch-onFC")

                this.changeInfoTin(0)
            }, 10)
        } else {
            document.getElementById("FimboContainer").style.display = "flex"
        }
    }

    updateURL(type) {
        const urlHistory = window.location.href
        const newURL = http.updateSearchParams(urlHistory, 'type', type)
        window.history.pushState({path: newURL}, '', newURL)
    }

    basketF(ind) {
        const basket = document.getElementById("FimboBShop")
        basket.href = fimbos[ind].WAFWANDViyJl
    }

    changeInfoTinFake(ind) {
        const imgs = [{path: fimbos[ind].GIFJootWbE, type: "photo"}, {
            path: fimbos[ind].pEPCppRIOdbowR,
            type: "photo"
        }]
        fimbos[ind].WKTrbxdyQE.forEach((e) => {
            if (e.path)
                imgs.push({path: e.path, type: "photo"})
        })
        fimbos[ind].uGiAW.forEach((e) => {
            if (e.preview)
                imgs.push({path: e.preview, type: "video", pathV: e.path})
        })

        document.getElementById("FimNameTFake").innerHTML = fimbos[ind].mOFICyXDAMTxQcbr
        const img = document.getElementById("FimboImgTinFake")
        img.src = `${HOST}/files/cover/${fimbos[ind].uMBykHYhkxkbOC}/${imgs[0].path}`

        const plash = document.getElementById("FimboTiPlashFake")
        plash.innerHTML = ""
        const until = imgs.length
        for (let i = 0; i < until; ++i) {
            const line = document.createElement('div')
            line.classList.add("FimboTin__plashka_i")
            plash.append(line)

            if (imgs[i].type === "video") {
                line.innerHTML =
                    `<svg style="height: 100%" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9537 5.74716L3.12371 0.272314C2.80269 0.0912077 2.4388 -0.00272886 2.06906 6.03516e-05C1.69933 0.00284956 1.33693 0.102265 1.01875 0.288194C0.70876 0.463213 0.451219 0.716112 0.272289 1.0212C0.0933594 1.32629 -0.00058398 1.67269 2.7314e-06 2.02522V12.9749C-0.00058398 13.3275 0.0933594 13.6739 0.272289 13.9789C0.451219 14.284 0.70876 14.5369 1.01875 14.7119C1.33696 14.8978 1.69935 14.9971 2.06906 14.9999C2.43878 15.0027 2.80266 14.9088 3.12371 14.7278L12.9537 9.25298C13.2708 9.07961 13.535 8.8256 13.719 8.51735C13.903 8.20911 14 7.85785 14 7.50007C14 7.14229 13.903 6.79103 13.719 6.48278C13.535 6.17454 13.2708 5.92053 12.9537 5.74716Z" fill="black"/>
                    </svg>`
            }
        }
        plash.children[0].classList.add("FimboTin__plashka_i_selected")
    }

    checkHowManyLikes() {
        let lengthLikes = 0
        designLikes.forEach(ent => {
            if (ent.item_like)
                ++lengthLikes
        })

        return lengthLikes !== fimbos.length;
    }

    changeInfoTin(ind) {
        if (this.checkHowManyLikes()) {
            document.getElementById("FimboTin").style.display = "flex"
            document.getElementById("youLikedAllFimbo").style.display = "none"

            const curImg = {prev: 0, curr: 0}
            const new_img = [{path: fimbos[ind].GIFJootWbE, type: "photo"}, {
                path: fimbos[ind].pEPCppRIOdbowR,
                type: "photo"
            }]
            fimbos[ind].WKTrbxdyQE.forEach((e) => {
                if (e.path)
                    new_img.push({path: e.path, type: "photo"})
            })
            fimbos[ind].uGiAW.forEach((e) => {
                if (e.preview)
                    new_img.push({path: e.preview, type: "video", pathV: e.path})
            })

            document.getElementById("FimNameT").innerHTML = fimbos[ind].mOFICyXDAMTxQcbr
            const img = document.getElementById("FimboImgTin")
            img.src = `${HOST}/files/cover/${fimbos[ind].uMBykHYhkxkbOC}/${new_img[0].path}`

            const video = document.getElementById('FimboVideoTin')

            const plash = document.getElementById("FimboTiPlash")

            video.style.display = "none"
            img.style.display = "block"

            plash.innerHTML = ""
            const until = new_img.length
            for (let i = 0; i < until; ++i) {
                const line = document.createElement('div')
                line.classList.add("FimboTin__plashka_i")
                plash.append(line)

                if (new_img[i].type === "video") {
                    line.innerHTML =
                        `<svg style="height: 100%" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9537 5.74716L3.12371 0.272314C2.80269 0.0912077 2.4388 -0.00272886 2.06906 6.03516e-05C1.69933 0.00284956 1.33693 0.102265 1.01875 0.288194C0.70876 0.463213 0.451219 0.716112 0.272289 1.0212C0.0933594 1.32629 -0.00058398 1.67269 2.7314e-06 2.02522V12.9749C-0.00058398 13.3275 0.0933594 13.6739 0.272289 13.9789C0.451219 14.284 0.70876 14.5369 1.01875 14.7119C1.33696 14.8978 1.69935 14.9971 2.06906 14.9999C2.43878 15.0027 2.80266 14.9088 3.12371 14.7278L12.9537 9.25298C13.2708 9.07961 13.535 8.8256 13.719 8.51735C13.903 8.20911 14 7.85785 14 7.50007C14 7.14229 13.903 6.79103 13.719 6.48278C13.535 6.17454 13.2708 5.92053 12.9537 5.74716Z" fill="black"/>
                    </svg>`
                }

                line.addEventListener("click", () => {
                    if (new_img[i].type === "video") {
                        video.style.display = "flex"
                        if (new_img[i].pathV.slice(0, 7) === "<iframe") {
                            video.innerHTML = new_img[i].pathV
                            setTimeout(() => {
                                video.children[0].width = "100%"
                                video.children[0].height = "auto"
                            })
                        } else {
                            video.innerHTML = `
                            <video playsinline controls poster="${HOST}/files/cover/${fimbos[ind].uMBykHYhkxkbOC}/${new_img[i].path}" class="FimboTin__VSize" src="${HOST}/files/cover/${fimbos[ind].uMBykHYhkxkbOC}/video/${new_img[i].pathV}"></video>
                        `
                        }
                        img.style.display = "none"
                    } else {
                        video.style.display = "none"
                        img.style.display = "block"
                        img.src = `${HOST}/files/cover/${fimbos[ind].uMBykHYhkxkbOC}/${new_img[i].path}`
                    }
                    curImg.prev = curImg.curr
                    curImg.curr = i
                    plash.children[curImg.prev].classList.remove("FimboTin__plashka_i_selected")
                    plash.children[i].classList.add("FimboTin__plashka_i_selected")
                })
            }
            plash.children[0].classList.add("FimboTin__plashka_i_selected")

            this.basketF(ind)


            let next = ind + 1 >= fimbos.length ? 0 : ind + 1
            let count = 0

            while ((-1 !== designLikes.findIndex((ent) => ent.fimbo_id === fimbos[next].koKSFvCjCYRrwA)) && (count < fimbos.length)) {
                next = next + 1 >= fimbos.length ? 0 : next + 1
                ++count
            }


            Listener.lisArrows(ind, new_img, curImg)
            Listener.lisLikeToF(ind, next)
            Listener.lisDislikeToF(ind, next)
            Listener.lisReturnFimbo()


            setTimeout(() => {
                this.changeInfoTinFake(next)
            }, 150)
        } else {
            this.showYouLikedAllFimbos()
        }
    }

    showYouLikedAllFimbos() {
        document.getElementById("FimboTin").style.display = "none"

        document.getElementById("youLikedAllFimbo").style.display = "block"
    }

    colorHeart(id, type) {
        const el = document.getElementById(`HB_${id}`)
        const elD = document.getElementById(`HBD_${id}`)
        if (type) {
            if (!el.classList.contains("button__like__active"))
                el.classList.add("button__like__active")
            if (elD.classList.contains("button__like__active"))
                elD.classList.remove("button__like__active")
        } else {
            if (el.classList.contains("button__like__active"))
                el.classList.remove("button__like__active")
            if (!elD.classList.contains("button__like__active"))
                elD.classList.add("button__like__active")
        }

    }

    countLikes() {
        let lengthLikes = 0
        designLikes.forEach(ent => {
            if (ent.item_like)
                ++lengthLikes
        })

        return lengthLikes
    }


}

const act = new Actions()

class Listeners {
    prevLis = []
    ind = 0
    prevs = []

    constructor() {
        this.lisTinRev()
        this.lisSwipeTin()
        this.initItemsTin()
        this.lisButtonSwitch()
        this.lisPhoto()
        this.youLikedAllFimbos()
    }

    youLikedAllFimbos() {
        document.getElementById("youLikedAllFimbo").addEventListener("click", () => {
            document.getElementById("youLikedAllFimbo").style.display = "none"

            document.getElementById("switch-btnFC").classList.remove("switch-onFC")

            document.getElementById("FimboContainer").style.display = "flex"

            document.getElementById("FimboTin").style.display = "none"

            act.updateURL('see-all')
        })
    }

    initItemsTin() {
        document.getElementById("FimboBLike").addEventListener("mousedown", (e) => e.stopPropagation())
        document.getElementById("FimboBLike").addEventListener("touchstart", (e) => e.stopPropagation(), {passive: true})
        document.getElementById("FimboBDislike").addEventListener("mousedown", (e) => e.stopPropagation())
        document.getElementById("FimboBDislike").addEventListener("touchstart", (e) => e.stopPropagation(), {passive: true})
        document.getElementById("FimboBReturn").addEventListener("mousedown", (e) => e.stopPropagation())
        document.getElementById("FimboBReturn").addEventListener("touchstart", (e) => e.stopPropagation(), {passive: true})
        document.getElementById("FimboBShop").addEventListener("mousedown", (e) => e.stopPropagation())
        document.getElementById("FimboBShop").addEventListener("touchstart", (e) => e.stopPropagation(), {passive: true})
        document.getElementById("FimboTiPlash").addEventListener("mousedown", (e) => e.stopPropagation())
        document.getElementById("FimboTiPlash").addEventListener("touchstart", (e) => e.stopPropagation(), {passive: true})
        document.getElementById("FimboTinArrL").addEventListener("mousedown", (e) => e.stopPropagation())
        document.getElementById("FimboTinArrL").addEventListener("touchstart", (e) => e.stopPropagation(), {passive: true})
        document.getElementById("FimboTinArrR").addEventListener("mousedown", (e) => e.stopPropagation())
        document.getElementById("FimboTinArrR").addEventListener("touchstart", (e) => e.stopPropagation(), {passive: true})
        document.getElementById("CrossBAll").addEventListener("mousedown", (e) => e.stopPropagation())
        document.getElementById("CrossBAll").addEventListener("touchstart", (e) => e.stopPropagation(), {passive: true})
    }

    lisTinRev() {
        document.getElementById("CrossBAll").addEventListener("click", () => {
            const main = document.getElementById("FimboContainer")
            main.style.display = "flex"

            const tin = document.getElementById("FimboTin")
            tin.style.display = "none"

            act.updateURL('see-all')

            document.getElementById("switch-btnFC").classList.toggle("switch-onFC")
        })
    }

    lisPhoto() {
        const container = document.getElementById("bigImgContainer")
        const img = document.getElementById("FimboImgTin")
        const bigImg = document.getElementById("bigImgFimbo")

        container.addEventListener("click", () => {
            container.style.display = "none"
        })

        img.addEventListener("mousedown", () => {
            let check = true
            const funcMove = () => {
                check = false
            }
            const funcUp = () => {
                if (check) {
                    container.style.display = "flex"
                    bigImg.src = img.src
                }

                img.removeEventListener('mousemove', funcMove)
                img.removeEventListener("mouseup", funcUp)
            }

            img.addEventListener("mousemove", funcMove)
            img.addEventListener("mouseup", funcUp)
        })

        img.addEventListener("touchstart", () => {
            let check = true
            const funcMove = () => {
                check = false
            }
            const funcUp = () => {
                if (check) {
                    setTimeout(() => {
                        container.style.display = "flex"
                        bigImg.src = img.src
                    }, 10)
                }

                img.removeEventListener('touchmove', funcMove)
                img.removeEventListener("touchend", funcUp)
            }

            img.addEventListener("touchmove", funcMove, {passive: false})
            img.addEventListener("touchend", funcUp)
        }, {passive: true})
    }

    lisTin(cont, index) {
        cont.addEventListener("click", () => {
            const main = document.getElementById("FimboContainer")
            main.style.display = "none"
            const tin = document.getElementById("FimboTin")
            tin.style.display = "flex"

            act.updateURL('the-best')

            this.ind = index
            this.prevs = []

            act.changeInfoTin(index)

            document.getElementById("switch-btnFC").classList.toggle("switch-onFC")
        })
    }

    lisReturnFimbo() {
        const returnButton = document.getElementById("FimboBReturn")
        const item = document.getElementById("FimboTinItem")
        returnButton.removeEventListener("click", this.prevLis[4])

        this.prevLis[4] = (e) => {
            e.stopPropagation()

            const prev = this.prevs[this.prevs.length - 1]

            act.changeInfoTinFake(prev)

            item.style.animation = "TinReturn .4s linear"

            setTimeout(() => {
                this.prevs.splice(this.prevs.length - 1, 1)

                act.changeInfoTin(prev, true)

                this.ind = prev

            }, 280)

            setTimeout(() => {
                item.style.animation = "none"
            }, 400)
        }

        if (this.prevs.length > 0) {
            returnButton.addEventListener("click", this.prevLis[4])
        }

    }

    lisLike(like, otherB, id, likeType) {
        like.addEventListener("click", () => {

            if (like.classList.contains("button__like__active")) {
                like.classList.remove("button__like__active")
                if (!otherB.classList.contains("button__like__active")) {
                    otherB.classList.add("button__like__active")
                }
                fetc.setLike(id, "fimbo", 3, likeType).then(() => {
                    const Ind = designLikes.findIndex((ent) => ent.fimbo_id === id)
                    designLikes[Ind].item_like = !likeType
                    InitProgress.checkProg()
                }).catch(() => {
                    like.classList.add("button__like__active")
                    http.showError()
                })
            } else {
                like.classList.add("button__like__active")
                if (otherB.classList.contains("button__like__active")) {
                    otherB.classList.remove("button__like__active")
                }

                fetc.setLike(id, "fimbo", 3, likeType).then(() => {
                    const Ind = designLikes.findIndex((ent) => ent.fimbo_id === id)
                    if (Ind !== -1)
                        designLikes[Ind].item_like = likeType
                    else
                        designLikes.push({fimbo_id: id, item_like: likeType})
                    InitProgress.checkProg()
                }).catch(() => {
                    like.classList.remove("button__like__active")
                    http.showError()
                })

            }
        })
    }

    lisDislikeToF(ind, next) {
        const dislike = document.getElementById("FimboBDislike")
        const item = document.getElementById("FimboTinItem")

        dislike.removeEventListener("click", this.prevLis[3])

        this.prevLis[3] = (e) => {
            e.stopPropagation()

            item.style.animation = "TinDisLike .4s linear"

            const id = fimbos[ind].koKSFvCjCYRrwA

            act.colorHeart(id, false)

            const Ind = designLikes.findIndex((ent) => ent.fimbo_id === id)

            if ((Ind === -1) || (designLikes[Ind].item_like)) {
                fetc.setLike(id, "fimbo", 3, false).then(() => {
                    if (Ind !== -1)
                        designLikes[Ind].item_like = false
                    else
                        designLikes.push({fimbo_id: id, item_like: false})

                    InitProgress.checkProg()
                }).catch(() => {
                    act.colorHeart(id, true)
                    http.showError()
                })
            }


            setTimeout(() => {
                this.prevs.push(this.ind)

                act.changeInfoTin(next)

                this.ind = next
            }, 280)

            setTimeout(() => {
                item.style.animation = "none"
            }, 400)
        }

        dislike.addEventListener("click", this.prevLis[3])
    }

    lisLikeToF(ind, next) {
        const like = document.getElementById("FimboBLike")
        const item = document.getElementById("FimboTinItem")
        const fake = document.getElementById("FimboTinItemFake")

        like.removeEventListener("click", this.prevLis[2])

        this.prevLis[2] = (e) => {
            e.stopPropagation()

            if (act.countLikes() >= fimbos.length - 1) {
                fake.style.display = "none"
            }

            item.style.animation = "TinLike .4s linear"

            const id = fimbos[ind].koKSFvCjCYRrwA

            const Ind = designLikes.findIndex((ent) => ent.fimbo_id === fimbos[ind].koKSFvCjCYRrwA)

            if ((Ind === -1) || (designLikes[Ind].item_like === false)) {

                act.colorHeart(id, true)

                fetc.setLike(id, "fimbo", 3, true).then(() => {
                    if (Ind !== -1)
                        designLikes[Ind].item_like = true
                    else
                        designLikes.push({fimbo_id: id, item_like: true})

                    InitProgress.checkProg()
                }).catch(() => {
                    act.colorHeart(id, false)
                    http.showError()
                })

            }


            setTimeout(() => {
                this.prevs.push(this.ind)

                act.changeInfoTin(next)

                this.ind = next
            }, 280)

            setTimeout(() => {
                item.style.animation = "none"

                fake.style.display = "block"
            }, 400)
        }

        like.addEventListener("click", this.prevLis[2])
    }

    lisArrows(ind, new_img, curImg) {
        const plash = document.getElementById("FimboTiPlash")
        const arr1 = document.getElementById("FimboTinArrL")
        const arr2 = document.getElementById("FimboTinArrR")
        const img = document.getElementById("FimboImgTin")
        const video = document.getElementById('FimboVideoTin')

        arr1.removeEventListener("click", this.prevLis[0])
        arr2.removeEventListener("click", this.prevLis[1])

        const change = () => {
            if (new_img[curImg.curr].type === "video") {
                video.style.display = "flex"
                if (new_img[curImg.curr].pathV.slice(0, 7) === "<iframe") {
                    video.innerHTML = new_img[curImg.curr].pathV
                    setTimeout(() => {
                        video.children[0].width = "100%"
                        video.children[0].height = "auto"
                    })
                } else {
                    video.innerHTML = `
                            <video playsinline poster="${HOST}/files/cover/${fimbos[ind].uMBykHYhkxkbOC}/${new_img[curImg.curr].path}" controls class="FimboTin__VSize" src="${HOST}/files/cover/${fimbos[ind].uMBykHYhkxkbOC}/video/${new_img[curImg.curr].pathV}"></video>
                        `
                }
                img.style.display = "none"
            } else {
                video.style.display = "none"
                img.style.display = "block"
                img.src = `${HOST}/files/cover/${fimbos[ind].uMBykHYhkxkbOC}/${new_img[curImg.curr].path}`
            }

            plash.children[curImg.prev].classList.remove("FimboTin__plashka_i_selected")
            plash.children[curImg.curr].classList.add("FimboTin__plashka_i_selected")
        }

        this.prevLis[0] = () => {
            curImg.prev = curImg.curr
            curImg.curr = (curImg.curr - 1 < 0) ? new_img.length - 1 : curImg.curr - 1

            change()
        }
        this.prevLis[1] = () => {
            curImg.prev = curImg.curr
            curImg.curr = (curImg.curr + 1 >= new_img.length) ? 0 : curImg.curr + 1

            change()
        }

        arr1.addEventListener("click", this.prevLis[0])
        arr2.addEventListener("click", this.prevLis[1])
    }

    lisSwipeTin() {
        const Par = document.getElementById("FimboTinItem")

        const redBack = document.getElementById("redSwipeBack")
        const greenBack = document.getElementById("greenSwipeBack")


        Par.addEventListener("mousedown", (e) => {
            e.preventDefault()
            const rect = Par.getBoundingClientRect();
            const firstValue = e.clientX - rect.left

            const fake = document.getElementById("FimboTinItemFake")
            if (act.countLikes() >= fimbos.length - 1) {
                fake.style.display = "none"
            }

            const mouseMoveHandler = (e) => {
                e.preventDefault()
                const check = e.clientX - rect.left

                let percent = check - firstValue

                if (percent < -100)
                    percent = -100
                else if (percent > 100)
                    percent = 100

                const val = percent / 100
                const valAb = Math.abs(percent / 100)

                if (percent > 0) {
                    greenBack.style.opacity = `${valAb}`
                    redBack.style.opacity = "0"
                } else if (percent < 0) {
                    redBack.style.opacity = `${valAb}`
                    greenBack.style.opacity = "0"
                }

                Par.style.transform = `rotate(${5 * (val)}deg) translateX(${120 * (val) + "px"}) translateY(${(10 * valAb) + "px"})`
            };

            const mouseUpHandler = (e) => {
                e.preventDefault()
                const check = e.clientX - rect.left

                const value = check - firstValue

                Par.style.transition = ".2s linear all"
                if (value > 100 || value < -100) {
                    const id = fimbos[this.ind].koKSFvCjCYRrwA

                    const isEl = designLikes.findIndex((ent) => ent.fimbo_id === id)

                    if (value > 100) {
                        Par.style.transform = 'rotate(7deg) translateX(220px) translateY(20px)'
                        if (isEl === -1 || (designLikes[isEl].item_like === false)) {
                            act.colorHeart(id, true)

                            fetc.setLike(id, "fimbo", 3, true).then(() => {
                                if (isEl !== -1)
                                    designLikes[isEl].item_like = true
                                else
                                    designLikes.push({fimbo_id: id, item_like: true})
                                InitProgress.checkProg()
                            }).catch(() => {
                                act.colorHeart(id, false)
                                http.showError()
                            })

                        }
                    } else {
                        Par.style.transform = 'rotate(-7deg) translateX(-220px) translateY(20px)'
                        if ((isEl === -1) || (designLikes[isEl].item_like === true)) {
                            act.colorHeart(id, false)

                            fetc.setLike(id, "fimbo", 3, false).then(() => {
                                if (isEl !== -1)
                                    designLikes[isEl].item_like = false
                                else
                                    designLikes.push({fimbo_id: id, item_like: false})
                                InitProgress.checkProg()
                            }).catch(() => {
                                act.colorHeart(id, true)
                                http.showError()
                            })

                        }
                    }
                    Par.style.opacity = "0"
                    this.prevs.push(this.ind)
                    setTimeout(() => {
                        greenBack.style.opacity = "0"
                        redBack.style.opacity = "0"

                        let next = this.ind + 1 >= fimbos.length ? 0 : this.ind + 1
                        let count = 0

                        while ((-1 !== designLikes.findIndex((ent) => ent.fimbo_id === fimbos[next].koKSFvCjCYRrwA)) && (count < fimbos.length)) {
                            next = next + 1 >= fimbos.length ? 0 : next + 1
                            ++count
                        }

                        act.changeInfoTin(next)
                        this.ind = next
                    }, 220)
                } else {
                    Par.style.transform = 'none'
                    greenBack.style.opacity = "0"
                    redBack.style.opacity = "0"
                }

                setTimeout(() => {
                    Par.style.transition = "none"
                    Par.style.transform = 'none'
                    Par.style.opacity = "1"

                    fake.style.display = "block"
                }, 270)

                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            }
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        })

        Par.addEventListener('touchstart', (event) => {
            const rect = Par.getBoundingClientRect();
            const firstValue = event.touches[0].clientX - rect.left

            const fake = document.getElementById("FimboTinItemFake")
            if (act.countLikes() >= fimbos.length - 1) {
                fake.style.display = "none"
            }
            const touchMoveHandler = (e) => {
                if (e.cancelable) e.preventDefault();
                const check = e.touches[0].clientX - rect.left

                let percent = check - firstValue

                if (percent < -100)
                    percent = -100
                else if (percent > 100)
                    percent = 100

                const val = percent / 100
                const valAb = Math.abs(percent / 100)

                if (percent > 0) {
                    greenBack.style.opacity = `${valAb}`
                    redBack.style.opacity = "0"
                } else if (percent < 0) {
                    redBack.style.opacity = `${valAb}`
                    greenBack.style.opacity = "0"
                }

                Par.style.transform = `rotate(${5 * (val)}deg) translateX(${120 * (val) + "px"}) translateY(${(10 * valAb) + "px"})`
            };

            const touchEndHandler = (e) => {
                const check = e.changedTouches[0].clientX - rect.left

                const value = check - firstValue

                Par.style.transition = ".2s linear all"
                if (value > 100 || value < -100) {
                    const id = fimbos[this.ind].koKSFvCjCYRrwA

                    const isEl = designLikes.findIndex((ent) => ent.fimbo_id === id)

                    if (value > 100) {
                        Par.style.transform = 'rotate(7deg) translateX(220px) translateY(20px)'
                        if ((isEl === -1) || (designLikes[isEl].item_like === false)) {
                            act.colorHeart(id, true)

                            fetc.setLike(id, "fimbo", 3, true).then(() => {
                                if (isEl !== -1)
                                    designLikes[isEl].item_like = true
                                else
                                    designLikes.push({fimbo_id: id, item_like: true})
                                InitProgress.checkProg()
                            }).catch(() => {
                                act.colorHeart(id, false)
                                http.showError()
                            })
                        }
                    } else {
                        Par.style.transform = 'rotate(-7deg) translateX(-220px) translateY(20px)'
                        if ((isEl === -1) || (designLikes[isEl].item_like === true)) {
                            act.colorHeart(id, false)

                            fetc.setLike(id, "fimbo", 3, false).then(() => {
                                if (isEl !== -1)
                                    designLikes[isEl].item_like = false
                                else
                                    designLikes.push({fimbo_id: id, item_like: false})
                                InitProgress.checkProg()
                            }).catch(() => {
                                act.colorHeart(id, true)
                                http.showError()
                            })
                        }
                    }
                    Par.style.opacity = "0"
                    this.prevs.push(this.ind)
                    setTimeout(() => {
                        greenBack.style.opacity = "0"
                        redBack.style.opacity = "0"

                        let next = this.ind + 1 >= fimbos.length ? 0 : this.ind + 1
                        let count = 0

                        while ((-1 !== designLikes.findIndex((ent) => ent.fimbo_id === fimbos[next].koKSFvCjCYRrwA)) && (count < fimbos.length)) {
                            next = next + 1 >= fimbos.length ? 0 : next + 1
                            ++count
                        }
                        act.changeInfoTin(next)
                        this.ind = next
                    }, 220)
                } else {
                    Par.style.transform = 'none'
                    greenBack.style.opacity = "0"
                    redBack.style.opacity = "0"
                }

                setTimeout(() => {
                    Par.style.transition = "none"
                    Par.style.transform = 'none'
                    Par.style.opacity = "1"
                    fake.style.display = "block"
                }, 270)

                document.removeEventListener('touchmove', touchMoveHandler);
                document.removeEventListener('touchend', touchEndHandler);
            }
            document.addEventListener('touchmove', touchMoveHandler, {passive: false});
            document.addEventListener('touchend', touchEndHandler);
        }, {passive: true})
    }

    lisSwiperMob(cont, images, path, vid, plashka, vs) {
        const slides = cont.querySelectorAll('.FimboContainer__item__img')
        let slideIndex = 0


        const slide = (type) => {
            cont.style.pointerEvents = "none"
            slides.forEach((ent) => {
                ent.style.transition = ".2s linear transform"
            })
            if (type === "+") {
                slides[0].style.transform = `translateX(-200%)`
                slides[1].style.transform = `translateX(-200%)`
                slides[2].style.transform = `translateX(-200%)`
            } else {
                slides[0].style.transform = `translateX(0)`
                slides[1].style.transform = `translateX(0)`
                slides[2].style.transform = `translateX(0)`
            }

            if (images[slideIndex].type === "photo") {
                vid.style.display = "none"
            } else {
                setTimeout(() => {
                    vid.style.display = "block"
                }, 200)
            }

            plashka.children[slideIndex].classList.add("FimboContainer__item__img_ball_selected")

            setTimeout(() => {
                const prev = (slideIndex - 1 < 0) ? (images.length - 1) : (slideIndex - 1)
                const next = (slideIndex + 1 >= images.length) ? 0 : slideIndex + 1
                slides[0].src = `${HOST}/files/cover/${path}/${images[prev].path}`
                slides[1].src = `${HOST}/files/cover/${path}/${images[slideIndex].path}`
                if (type === "+") {
                    slides[0].src = `${HOST}/files/cover/${path}/${images[prev].path}`
                    slides[1].src = `${HOST}/files/cover/${path}/${images[slideIndex].path}`
                    slides.forEach((ent) => {
                        ent.style.transition = "none"
                        ent.style.transform = "translateX(-100%)"
                    })
                    slides[2].src = `${HOST}/files/cover/${path}/${images[next].path}`
                } else {
                    slides[1].src = `${HOST}/files/cover/${path}/${images[slideIndex].path}`
                    slides.forEach((ent) => {
                        ent.style.transition = "none"
                        ent.style.transform = "translateX(-100%)"
                    })
                    slides[0].src = `${HOST}/files/cover/${path}/${images[prev].path}`
                    slides[2].src = `${HOST}/files/cover/${path}/${images[next].path}`
                }
            }, 210)

            setTimeout(() => {
                cont.style.pointerEvents = "auto"
            }, 250)
        }

        cont.addEventListener('touchstart', (event) => {
            const posInit = event.changedTouches[0].clientX;
            const widthS = slides[1].scrollWidth

            slides.forEach((ent) => {
                ent.style.transition = "none"
            })

            const touchMoveHandler = (e) => {
                if (e.cancelable) e.preventDefault();
                const posX1 = e.changedTouches[0].clientX
                let percentFin = (posInit - posX1) / widthS * 100;
                if (percentFin > 100)
                    percentFin = 100
                else if (percentFin < -100)
                    percentFin = -100
                slides.forEach((ent) => {
                    ent.style.transform = `translateX(${-100 - percentFin}%)`
                })
            };

            const touchEndHandler = (e) => {
                const posX1 = e.changedTouches[0].clientX
                const posFinal = posInit - posX1;
                if (posFinal < -60) {
                    plashka.children[slideIndex].classList.remove("FimboContainer__item__img_ball_selected")
                    vs.prev = slideIndex
                    slideIndex = (slideIndex - 1 < 0) ? images.length - 1 : slideIndex - 1
                    slide("-")
                } else if (posFinal > 60) {
                    plashka.children[slideIndex].classList.remove("FimboContainer__item__img_ball_selected")
                    vs.prev = slideIndex
                    slideIndex = (slideIndex + 1 >= images.length) ? 0 : slideIndex + 1
                    slide("+")
                } else {
                    slides.forEach((ent) => {
                        ent.style.transition = ".2s linear transform"
                        ent.style.transform = `translateX(-100%)`
                    })
                }


                document.removeEventListener('touchmove', touchMoveHandler);
                document.removeEventListener('touchend', touchEndHandler);
            }

            document.addEventListener('touchmove', touchMoveHandler, {passive: false});
            document.addEventListener('touchend', touchEndHandler);
        }, {passive: true})

    }

    lisButtonSwitch() {
        const button = document.getElementById("switch-btnFC")
        button.addEventListener("click", () => {
            if (button.classList.contains("switch-onFC")) {
                const main = document.getElementById("FimboContainer")
                main.style.display = "flex"

                const tin = document.getElementById("FimboTin")
                tin.style.display = "none"

                act.updateURL('see-all')

                button.classList.remove("switch-onFC")
            } else {
                const main = document.getElementById("FimboContainer")
                main.style.display = "none"
                const tin = document.getElementById("FimboTin")
                tin.style.display = "flex"

                act.updateURL('the-best')

                act.changeInfoTin(this.ind)

                button.classList.add("switch-onFC")
            }
        })
    }

}

const Listener = new Listeners()

class Elements {
    createNameAndBasket(nam, url) {
        const block = document.createElement('div')
        block.classList.add("FimboContainer__item__name")
        const name = document.createElement('a')
        name.classList.add("FimboContainer__item__name_a")
        const text = document.createElement('div')
        text.innerHTML = `${nam}`
        text.classList.add("FimboContainer__item__name_text")
        name.href = url
        name.append(text)


        const basketCont = document.createElement('a')
        basketCont.href = url
        basketCont.classList.add("FimboContainer__item__basket")
        const basket = document.createElementNS(xmlnsPath, 'svg')
        basket.setAttribute('width', "18")
        basket.setAttribute('height', "20")
        basket.setAttribute('viewBox', "0 0 16 18")
        basket.innerHTML = document.getElementById("cartSVG").innerHTML
        basketCont.append(basket)

        block.append(name, basketCont)
        return block
    }

    createImg(path, imgMain, imgSecond, others, videos_p, index) {
        const images = [{path: imgMain, type: "photo"}, {path: imgSecond, type: "photo"}]
        others.forEach((e) => {
            if (e.path)
                images.push({path: e.path, type: "photo"})
        })
        videos_p.forEach((e) => {
            if (e.preview)
                images.push({path: e.preview, type: "video", pathV: e.path})
        })

        let vs = {prev: 0}

        const container = document.createElement('div')
        container.classList.add('FimboContainer__item__c')

        Listener.lisTin(container, index)

        const contImg = document.createElement('div')
        contImg.classList.add("FimboContainer__item__ImgCont")

        const hoverContainer = document.createElement('div')
        hoverContainer.classList.add("FimboContainer__item__hoverCont")

        if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches) {
            hoverContainer.style.display = "none"
        }

        hoverContainer.addEventListener('mouseleave', () => {
            plashka.children[vs.prev].classList.remove("FimboContainer__item__img_ball_selected")
            plashka.children[0].classList.add("FimboContainer__item__img_ball_selected")
            img_cont.children[1].src = `${HOST}/files/cover/${path}/${images[0].path}`
            videoSV.style.display = "none"
            vs.prev = 0
        })

        const img_cont = document.createElement('div')
        img_cont.classList.add("FimboContainer__item__img_cont")

        for (let i = -1; i < 2; ++i) {
            const ind = (images.length + i === images.length - 1) ? (images.length - 1) : i
            const img = document.createElement('img')
            img.loading = "lazy"
            img.classList.add("FimboContainer__item__img")
            if (i === 0)
                img.classList.add("FimboContainer__item__img__main")
            else if (i === 1)
                img.classList.add("FimboContainer__item__img__prev")
            else
                img.classList.add("FimboContainer__item__img__next")
            img.src = `${HOST}/files/cover/${path}/${images[ind].path}`
            img_cont.append(img)
        }


        const videoSV = document.createElementNS(xmlnsPath, 'svg')
        videoSV.setAttribute('width', "24")
        videoSV.setAttribute('height', "24")
        videoSV.setAttribute('viewBox', "0 0 26 24")
        videoSV.setAttribute('fill', "none")
        videoSV.innerHTML = document.getElementById("videoSVG").innerHTML
        videoSV.classList.add("videoPl")

        const plashka = document.createElement('div')
        plashka.classList.add("FimboContainer__item__img_count")

        const until = images.length
        for (let i = 0; i < until; ++i) {
            const ball = document.createElement('div')
            ball.classList.add("FimboContainer__item__img_ball")
            plashka.append(ball)

            const hoverI = document.createElement('div')
            hoverI.classList.add("FimboContainer__item__img_hover")

            hoverI.addEventListener('mouseenter', () => {
                img_cont.children[1].src = `${HOST}/files/cover/${path}/${images[i].path}`
                plashka.children[vs.prev].classList.remove("FimboContainer__item__img_ball_selected")
                plashka.children[i].classList.add("FimboContainer__item__img_ball_selected")
                if (images[i].type === "photo") {
                    videoSV.style.display = "none"
                } else {
                    videoSV.style.display = "block"
                }
                vs.prev = i
            })
            hoverContainer.append(hoverI)
        }
        plashka.children[0].classList.add("FimboContainer__item__img_ball_selected")

        Listener.lisSwiperMob(img_cont, images, path, videoSV, plashka, vs)

        contImg.append(img_cont, hoverContainer, videoSV)
        container.append(contImg, plashka)

        return container
    }

    createLikes(id) {
        const likesRow = document.createElement('div')
        likesRow.classList.add('FimboContainer__item__pos__cont')

        const LikeDis = document.createElement('div')
        LikeDis.classList.add("FimboContainer__item__like")

        const heartDis = document.createElementNS(xmlnsPath, 'svg')
        heartDis.innerHTML = document.getElementById("heartDisSVG").innerHTML
        heartDis.setAttribute('width', "22")
        heartDis.setAttribute('height', "19")
        heartDis.setAttribute('viewBox', "0 0 22 19")
        LikeDis.append(heartDis)
        LikeDis.id = "HBD_" + id

        const Like = document.createElement('div')
        Like.classList.add("FimboContainer__item__like")

        const like = document.createElementNS(xmlnsPath, 'svg')
        like.setAttribute('width', "22")
        like.setAttribute('height', "22")
        like.setAttribute('viewBox', "0 0 26 23")
        like.innerHTML = document.getElementById("heartSVG").innerHTML
        Like.append(like)
        Like.id = "HB_" + id

        const indC = designLikes.findIndex((entG) => entG.fimbo_id === id)

        if (indC !== -1) {
            if (designLikes[indC].item_like)
                Like.classList.add("button__like__active")
            else
                LikeDis.classList.add("button__like__active")
        }

        Listener.lisLike(LikeDis, Like, id, false)
        Listener.lisLike(Like, LikeDis, id, true)

        likesRow.append(LikeDis, Like)

        return likesRow
    }

}

const El = new Elements()

const createFimbos = async () => {
    fimbos = await fetc.fetchFimbos()

    const container = document.getElementById("FimboContainer")
    document.querySelectorAll(".FimboContainer__column").forEach((e) => e.innerHTML = "")

    fimbos.forEach((ent, index) => {
        const cont = document.createElement('div')
        cont.classList.add("FimboContainer__item")
        cont.id = 'fimCont' + ent.koKSFvCjCYRrwA

        const name = El.createNameAndBasket(ent.mOFICyXDAMTxQcbr, ent.WAFWANDViyJl)

        const img = El.createImg(ent.uMBykHYhkxkbOC, ent.pEPCppRIOdbowR,
            ent.GIFJootWbE, ent.WKTrbxdyQE, ent.uGiAW, index)

        const likes = El.createLikes(ent.koKSFvCjCYRrwA)

        cont.append(name, img, likes)

        container.append(cont)
    })

    if (fimbos) {
        act.initURL()
    }
}

const start = async () => {
    Loader(true)
    counter += 3

    InitClient.tokenInit().then(async () => {
        HOST = await fetc.fetchHos()

        await createFimbos()
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