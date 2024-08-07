const url = "https://admin.fimbo.ru"

const xmlnsPath = "http://www.w3.org/2000/svg"

let HOST

let counter = 0

let genres = []

let tracks_id_genres = []

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

    async fetchGenres() {

        let lt = await (await fetch(`${url}/api/OerchX/dLrPfZgj`)).json()
        let p = JSON.parse(lt.split("").map(ent => ent.codePointAt(0) - 1).map(ent => String.fromCodePoint(ent)).join(""))
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

    async setLike(id, type, block) {
        let lt = await (await fetch(`${url}/api/tUmrT/shceO`, {
            headers: {
                "Content-Type": "application/json",
                "client-token": http.getLocItem("clientToken"),
            },
            method: "POST",
            body: JSON.stringify({
                iPHHRPme: id, fAOUSyT: block, ksOxXXWwF: type
            })
        })).json()
        const s = 909 - 823 < 909 - 754 ? 6 + (888 - 823 > 10 ? 677 : 42) : String("2") + "9"
        let p = lt.map(ent => String.fromCodePoint(ent - s))
        p = JSON.parse(p.join(''))

        return p
    }

    async setLikes(ids, type, block){
        let lt = await (await fetch(`${url}/api/tUmrT/YsqcJtpXNZ`, {
            headers: {
                "Content-Type": "application/json",
                "client-token": http.getLocItem("clientToken"),
            },
            method: "POST",
            body: JSON.stringify({
                iPHHRPme: ids, fAOUSyT: block, ksOxXXWwF: type
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
    type = 3
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

    correctPronounce(count) {
        if (count === 1 || (count % 10 === 1 && count !== 11)) {
            return "Песня"
        } else if ((count % 10 === 2 || count % 10 === 3 || count % 10 === 4) && ((count % 100) !== 12 && (count % 100) !== 13 && (count % 100) !== 14)) {
            return "Песни"
        } else {
            return "Песен"
        }
    }

    filterSongs(value) {
        const mainContainer = document.getElementById("listOGen")

        if (mainContainer.querySelector(".findSong__container")) {
            mainContainer.querySelector(".findSong__container").remove()
        }

        if ( !value){
            for (const el of mainContainer.children){
                el.classList.remove("display_None")
            }
        } else {
            const songs = []
            const names = []

            const div = document.createElement('div')
            div.classList.add("findSong__container")

            for (const el of mainContainer.children){
                el.classList.add("display_None")
            }

            const compareValue = value.toLowerCase().trim()
            genres.forEach((ent) => {
                ent.lessons.forEach((el) => {
                    const SongName = el.nml.toLowerCase().trim()

                    if ((SongName && SongName.includes(compareValue))
                        ||
                        (el.sml && el.sml.toLowerCase().trim().includes(compareValue))) {
                        if (!names.includes(SongName)) {
                            songs.push(el)
                            names.push(SongName)
                        }
                    }
                })
            })

            songs.forEach((ent) => {
                El.createTrack(ent, div)
            })

            mainContainer.append(div)

        }
    }

    getIntoOne(genreAdditional) {
        // with the most prioritet

        const getting = (genre) => {
            genre.lessons.forEach((ent, index) => {
                const ids = [ent.ksl]
                const name = ent.nml.trim().toLowerCase()

                for (let i = index + 1; i < genre.lessons.length; ++i) {
                    if (name === genre.lessons[i].nml.trim().toLowerCase()) {
                        ids.push(genre.lessons[i].ksl)
                        genre.lessons.splice(i, 1)
                        --i
                    }
                }
                if (ids.length > 1) {
                    ent.ksl = [...ids]
                }
            })
        }

        genres.forEach(entit => {
            getting(entit)
        })
        getting(genreAdditional)


    }

    optimizeLikeForGenres() {
        const BigContainer = document.getElementById("listOGen")

        genres.forEach((ent, index) => {

            const button = BigContainer.children[index].children[0].children[0].children[0]

            const likesIds = lessonLikes.map(ent => ent.lesson_id)

            const indC = lessonLikes.findIndex((entG) => tracks_id_genres[index].includes(entG.lesson_id))
            if (indC !== -1) {
                button.classList.add("button__like__half")
            } else {
                button.classList.remove("button__like__half")
            }

            const noF = tracks_id_genres[index].findIndex((entZ) => !likesIds.includes(entZ))

            if (noF === -1) {
                button.classList.add("button__like__active")
            } else {
                button.classList.remove("button__like__active")
            }
        })
    }

    async sortGenresAndAdditional() {
        const response = await fetc.fetchGenres()

        const mostLikedGenre = {
            'ksl': 0,
            'nml': "Чаще всего выбирают",
            lessons: response.mostLikedSongs
        }

        genres = response.genres

        acts.getIntoOne(mostLikedGenre)

        genres.sort((a, b) => b.lessons.length - a.lessons.length)

        genres.unshift(mostLikedGenre)
    }

}

const acts = new Actions()

class Listeners {
    clickGenre = true

    constructor() {
        this.lisFind()
    }

    lisOpenGenre(cont, list) {
        cont.addEventListener("click", async () => {
            list.classList.toggle("genre_opened")
            cont.querySelector(".arrowCont").classList.toggle("arrow_trn")
        })
    }

    lisLikeGenre(Like, id, cont) {
        Like.addEventListener("click", (e) => {
            e.stopPropagation()

            if (this.clickGenre) {
                this.clickGenre = false
                if (Like.classList.contains("button__like__active")) {
                    const children = cont.children
                    const LiKeS = []

                    for (const elem of children) {
                        const button = elem.children[0].children[0]
                        if (button.classList.contains("button__like__active")) {
                            const ids = button.getAttribute('data-idtr').split(',').map(ent => Number(ent))

                            document.querySelectorAll(`.HB_${Math.max(...ids)}`).forEach((ent) => {

                                ent.classList.remove("button__like__active")
                            })

                            for (let i = 0; i < lessonLikes.length; ++i) {
                                if (ids.includes(lessonLikes[i].lesson_id)) {
                                    LiKeS.push(lessonLikes[i].lesson_id)
                                    lessonLikes.splice(i, 1)
                                    --i
                                }
                            }

                        }
                    }

                    fetc.setLikes(LiKeS, "lesson", 1).then(() => {
                        InitProgress.checkProg()
                    }).catch(() => {
                        http.showError()
                    })

                } else {
                    const children = cont.children
                    const LiKeS = []

                    for (const elem of children) {
                        const button = elem.children[0].children[0]
                        if (!button.classList.contains("button__like__active")) {
                            const ids = button.getAttribute('data-idtr').split(',').map(ent => Number(ent))

                            ids.forEach((ent) => {
                                LiKeS.push(ent)
                                lessonLikes.push({lesson_id: ent})
                            })

                            document.querySelectorAll(`.HB_${Math.max(...ids)}`).forEach((ent) => {
                                ent.classList.add("button__like__active")
                            })

                        }
                    }

                    fetc.setLikes(LiKeS, "lesson", 1).then(() => {
                        InitProgress.checkProg()
                    }).catch(() => {
                        http.showError()
                    })

                }

                acts.optimizeLikeForGenres()

                setTimeout(() => {
                    this.clickGenre = true
                }, 500)
            }
        })
    }

    lisLikeSong(Like, ids) {
        Like.addEventListener("click", (e) => {
            e.preventDefault()

            if (Like.classList.contains("button__like__active")) {
                if (Number.isInteger(ids)) {
                    document.querySelectorAll(`.HB_${ids}`).forEach((ent) => {
                        ent.classList.remove("button__like__active")
                    })

                    const delInd = lessonLikes.findIndex((ent) => ent.lesson_id === ids)
                    lessonLikes.splice(delInd, 1)

                    fetc.setLike(ids, "lesson", 1).then(() => {
                        InitProgress.checkProg()
                    }).catch(() => {
                        http.showError()
                        document.querySelectorAll(`.HB_${ids}`).forEach((ent) => {
                            ent.classList.add("button__like__active")
                        })
                        lessonLikes.push({lesson_id: ids})
                    })

                } else {
                    document.querySelectorAll(`.HB_${Math.max(...ids)}`).forEach((ent) => {
                        ent.classList.remove("button__like__active")
                    })

                    const LiKeS = []

                    for (let i = 0; i < lessonLikes.length; ++i) {
                        if (ids.includes(lessonLikes[i].lesson_id)) {
                            LiKeS.push(lessonLikes[i].lesson_id)
                            lessonLikes.splice(i, 1)
                            --i
                        }
                    }

                    fetc.setLikes(LiKeS, "lesson", 1).then(() => {
                        InitProgress.checkProg()
                    }).catch(() => {
                        http.showError()

                        document.querySelectorAll(`.HB_${Math.max(...ids)}`).forEach((ent) => {
                            ent.classList.add("button__like__active")
                        })

                        LiKeS.forEach((ent) => {
                            lessonLikes.push({lesson_id: ent.lesson_id})
                        })
                    })

                }
            } else {
                if (Number.isInteger(ids)) {
                    document.querySelectorAll(`.HB_${ids}`).forEach((ent) => {
                        ent.classList.add("button__like__active")
                    })
                    lessonLikes.push({lesson_id: ids})
                    fetc.setLike(ids, "lesson", 1).then(() => {
                        InitProgress.checkProg()
                    }).catch(() => {
                        http.showError()
                        document.querySelectorAll(`.HB_${ids}`).forEach((ent) => {
                            ent.classList.remove("button__like__active")
                        })
                        lessonLikes.splice(lessonLikes.findIndex(ent => ent.lesson_id === ids), 1)
                    })
                } else {

                    document.querySelectorAll(`.HB_${Math.max(...ids)}`).forEach((ent) => {
                        ent.classList.add("button__like__active")
                    })

                    const LiKeS = []
                    ids.forEach((ent) => {
                        LiKeS.push(ent)
                        lessonLikes.push({lesson_id: ent})
                    })

                    fetc.setLikes(LiKeS, "lesson", 1).then(() => {
                        InitProgress.checkProg()
                    }).catch(() => {
                        http.showError()
                        document.querySelectorAll(`.HB_${Math.max(...ids)}`).forEach((ent) => {
                            ent.classList.remove("button__like__active")
                        })

                        LiKeS.forEach((entI) => {
                            lessonLikes.splice(lessonLikes.findIndex((ent) => ent.lesson_id = entI), 1)
                        })
                    })
                }
            }

            acts.optimizeLikeForGenres()
        })
    }

    lisYandexSong(button, codeI) {
        if (codeI && codeI !== "") {
            button.addEventListener("click", (e) => {
                e.preventDefault()
                const div = document.createElement('div')
                div.classList.add('LLoader')
                div.addEventListener("click", () => {
                    $(".yandix").html('')
                })
                const con = document.createElement('div')
                con.classList.add('yandix_cont')
                con.innerHTML = codeI

                const cr = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
                cr.classList.add('crossYan')
                cr.innerHTML = document.getElementById("crossYann").innerHTML
                cr.setAttribute('width', "18")
                cr.setAttribute('height', "18")
                cr.setAttribute('viewBox', "0 0 17 17")
                cr.addEventListener("click", () => {
                    $(".yandix").html('')
                })
                con.append(cr)
                div.append(con)
                $(".yandix").append(div)
            })

        } else {
            button.classList.add("cursorNotAllowedYan")
        }
    }

    lisFind() {
        let timeout

        const inputFind = document.getElementById("FindSongsGenre")
        inputFind.addEventListener("input", (ev) => {
            const value = ev.currentTarget.value
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                acts.filterSongs(value)
            }, 500)
        })

        document.getElementById("findCross").addEventListener("click", () => {
            inputFind.value = ""
            acts.filterSongs("")
        })


    }

}

const Listener = new Listeners()

class Elements {

    initFirstOpen() {
        const container = document.getElementById("listOGen").children[0]

        container.querySelector(".genre_container__songs").classList.add("genre_opened")

        container.querySelector(".arrowCont").classList.toggle("arrow_trn")
    }

    async createGenres() {
        await acts.sortGenresAndAdditional()

        const mainCont = document.getElementById("listOGen")

        const likesIds = lessonLikes.map(ent => ent.lesson_id)

        genres.forEach((ent, index) => {
            const ids = []
            for (const el of ent.lessons) {
                if (Number.isInteger(el.ksl)) {
                    ids.push(el.ksl)
                } else {
                    el.ksl.forEach(entit => ids.push(entit))
                }
            }

            tracks_id_genres.push(ids)

            const base = document.createElement('div')
            base.classList.add("genre_container__fath")

            const containerB = document.createElement('div')
            containerB.classList.add("genre_container")

            const row1 = document.createElement('div')
            row1.classList.add("genre_row_it")
            const row2 = document.createElement('div')
            row2.classList.add("genre_row_it")

            const heartCont = document.createElement('div')
            heartCont.classList.add("ButtonOfLikeCon", 'GenreLikeButtonH')
            const heart = document.createElementNS(xmlnsPath, 'svg')
            heart.innerHTML = document.getElementById("heartSVG").innerHTML
            heart.setAttribute('width', "24")
            heart.setAttribute('height', "23")
            heart.setAttribute('viewBox', "0 0 26 23")
            heartCont.append(heart)

            const songsCont = document.createElement('div')
            songsCont.classList.add("genre_container__songs")

            Listener.lisLikeGenre(heartCont, ent.ksl, songsCont)


            const indC = lessonLikes.findIndex((entG) => ids.includes(entG.lesson_id))
            if (indC !== -1) {
                heartCont.classList.add("button__like__half")
            }

            const noF = ids.findIndex((entZ) => !likesIds.includes(entZ))

            if (noF === -1) {
                heartCont.classList.add("button__like__active")
            }

            const name = document.createElement('div')
            name.classList.add("genre__item__name")
            name.innerHTML = ent.nml

            row1.append(heartCont, name)

            const couSongs = document.createElement('div')
            couSongs.classList.add("genre__item__count")
            couSongs.innerHTML = ent.lessons.length + " " + acts.correctPronounce(ent.lessons.length)

            const arrowCont = document.createElement('div')
            arrowCont.classList.add("arrowCont")
            const arrow = document.createElementNS(xmlnsPath, 'svg')
            arrow.innerHTML = document.getElementById("arrowSVG").innerHTML
            arrow.setAttribute('width', "24")
            arrow.setAttribute('height', "14")
            arrow.setAttribute('viewBox', "0 0 24 14")
            arrow.setAttribute('fill', "none")
            arrowCont.append(arrow)

            row2.append(couSongs, arrowCont)
            containerB.append(row1, row2)

            Listener.lisOpenGenre(containerB, songsCont)

            this.createTracks(songsCont, index)

            base.append(containerB, songsCont)
            mainCont.append(base)
        })

        this.initFirstOpen()
    }

    createTrack(ent, cont){
        const con = document.createElement('a')
        con.classList.add("song_container")
        con.href = `https://fimbo.ru/training?type=cover&model=${ent.vln.path}&name=${ent.pml}`
        con.target = "_blank"

        const row1 = document.createElement('div')
        row1.classList.add("genre_row_it")
        const row2 = document.createElement('div')
        row2.classList.add("genre_row_it")

        const heartCont = document.createElement('div')
        heartCont.classList.add("ButtonOfLikeCon")
        const heart = document.createElementNS(xmlnsPath, 'svg')
        heart.innerHTML = document.getElementById("heartSVG").innerHTML
        heart.setAttribute('width', "24")
        heart.setAttribute('height', "23")
        heart.setAttribute('viewBox', "0 0 26 23")
        heartCont.append(heart)
        Listener.lisLikeSong(heartCont, ent.ksl)

        if (Number.isInteger(ent.ksl)) {
            heartCont.classList.add("HB_" + ent.ksl)
            heartCont.setAttribute('data-idtr', ent.ksl)

            const indS = lessonLikes.findIndex((entit) => entit.lesson_id === ent.ksl)
            if (indS !== -1) {
                heartCont.classList.add("button__like__active")
            }
        } else {
            heartCont.classList.add("HB_" + Math.max(...ent.ksl))

            heartCont.setAttribute('data-idtr', ent.ksl.join(','))


            const indS = lessonLikes.findIndex((entit) => ent.ksl.includes(entit.lesson_id))
            if (indS !== -1) {
                heartCont.classList.add("button__like__active")
            }
        }


        const name = document.createElement('div')
        name.classList.add("song__item__name")
        if (ent.sml) {
            name.innerHTML = `<span style="font-weight: 400">${ent.sml} - </span>${ent.nml}`
        } else {
            name.innerHTML = ent.nml
        }

        const img = document.createElement('img')
        img.src = `${HOST}/files/cover/${ent.vln.path}/${ent.pml}/${ent.zml}`
        img.classList.add("song__item__img")
        img.loading = "lazy"

        row1.append(heartCont, img, name)

        const yandCont = document.createElement('div')
        yandCont.classList.add("ButtonOfLikeCon")
        const yan = document.createElementNS(xmlnsPath, 'svg')
        yan.innerHTML = document.getElementById("yandexLogoSVG").innerHTML
        yan.setAttribute('width', "26")
        yan.setAttribute('height', "26")
        yan.setAttribute('viewBox', "0 0 16 16")
        yan.setAttribute('fill', "none")
        yandCont.append(yan)

        Listener.lisYandexSong(yandCont, ent.shl)

        row2.append(yandCont)
        con.append(row1, row2)

        cont.append(con)
    }

    createTracks(cont, ind) {
        genres[ind].lessons.forEach((ent) => {
            this.createTrack(ent, cont)
        })
    }

}

const El = new Elements()
const start = async () => {
    Loader(true)
    counter += 3

    InitClient.tokenInit().then(async () => {
        HOST = await fetc.fetchHos()

        await El.createGenres()
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