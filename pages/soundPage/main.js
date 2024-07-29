const url = "https://admin.fimbo.ru"

const xmlnsPath = "http://www.w3.org/2000/svg"

let HOST

let counter = 0

let lessons = []

let fimbos = []

let currentPlaylist = 0

let currentTrack = 0

let designLikes = [], soundLikes = [], lessonLikes = [], soulLikes = []

let interval

const Vars = {
    bpm: 0,
    currentNote: 0,
    amountNote: 0,
    trackPlaying: false,
    scrolling: false,
    audio: null,
    error: false
}

const prevTrack = {
    currentPlaylist: 0,
    currentTrack: 0,
    currentNote: 0,
    currentTime: 0,
    prevCurrentTime: 0,
    prevCurrentNote: 0
}

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

let volumeS = http.getLocItem("volumelvl") ? Number(http.getLocItem("volumelvl")) : 50

class Notes {
    context = new (window.AudioContext || window.webkitAudioContext)()
    soundBuffers = []

    async getFile(Path, i) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", Path, true);
        xhr.responseType = "arraybuffer";
        xhr.send();
        xhr.onload = () => {
            this.context.decodeAudioData(
                xhr.response,
                (decodedBuffer) => {
                    this.soundBuffers[i] = decodedBuffer
                    --counter
                    Loader()
                },
                () => {
                    --counter
                    Loader()
                },
            );
        };
        xhr.onerror = () => {
            --counter
            Loader()
        }
    }

    async setupNotes(ur, path) {
        let p = []
        ur.forEach(ent => {
            p[ent.note] = `${HOST}/files/cover/${path}/${ent.file_sound}`
        })
        const until = ur.length
        if (until === 9) --counter
        for (let i = 1; i < until + 1; i++) {
            await this.getFile(p[i], i)
        }
    }

    startSamp(ind, accent = false) {
        const s = this.context.createBufferSource()
        s.buffer = this.soundBuffers[ind]
        const volume = this.context.createGain();
        if (accent)
            volume.gain.value = (volumeS / 100)
        else
            volume.gain.value = 0.6 * (volumeS / 100)
        s.connect(volume)
        volume.connect(this.context.destination)
        s.start(0)
    }
}

const notes_FIM = new Notes()

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
        let lt = await (await fetch(`${url}/api/QsozdusLSdZsTCJ/gDGbQQmmMfNZJM/${fimboSize}`)).json()
        const s = 909 - 823 < 909 - 754 ? 6 + (888 - 823 > 10 ? 677 : 42) : String("2") + "9"
        let p = lt.map(ent => String.fromCodePoint(ent - s))
        p = JSON.parse(p.join(''))
        if (p) {
            --counter
            Loader()
        }
        return p
    }

    async fetchFimbo(id) {
        let lt = await (await fetch(`${url}/api/QsozdusLSdZsTCJ/IKEOjwGTHt/${id}?size=${fimboSize}`)).json()
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
    type = 2
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

        if (this.prog === 4){
            this.textNext.textContent = "Завершить"
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

    addProg(){
        ++this.prog
        this.changeCifra()
        if (this.prog === 4)
            this.textNext.textContent = "Завершить"
        else
            this.textNext.textContent = "Продолжить"
    }

    delProg(){
        --this.prog
        this.changeCifra()
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


class Player {
    playNote(note) {
        let num = note.num
        let num_l = note.num_l
        let num_r = note.num_r
        if (num === 0) {
            if (fimboSize === "22cm") {
                num = 9
            } else {
                num = 10
            }
        }
        if (num_l === 0) {
            if (fimboSize === "22cm") {
                num_l = 9
            } else {
                num_l = 10
            }
        }
        if (num_r === 0) {
            if (fimboSize === "22cm") {
                num_r = 9
            } else {
                num_r = 10
            }
        }
        if (num_l && num_r) {
            notes_FIM.startSamp(num_l)
            notes_FIM.startSamp(num_r)
        } else if (num_l && num) {
            notes_FIM.startSamp(num_l)
            notes_FIM.startSamp(num)
        } else if (num || num_l || num_r) {
            let pepe
            if (num)
                pepe = num
            if (num_l)
                pepe = num_l
            if (num_r)
                pepe = num_r
            notes_FIM.startSamp(pepe, note.accent)
        }
    }
}

const player = new Player()

let fimboSize = http.getLocItem("fimsize") ? http.getLocItem("fimsize") : "27cm"

class Listeners {

    constructor() {
        this.openVolume()
        this.volumeSlider()
        this.playTrack()
        this.nextTrack()
        this.prevTrack()
        this.durationSlider()
    }

    chooseFimboSize() {
        switch (fimboSize) {
            case "22cm":
                document.getElementById("22cm").classList.add("FimboSize__img__chosen")
                break
            case "27cm":
                document.getElementById("27cm").classList.add("FimboSize__img__chosen")
                break
            case "32cm":
                document.getElementById("32cm").classList.add("FimboSize__img__chosen")
                break
            default:
                document.getElementById("27cm").classList.add("FimboSize__img__chosen")
                fimboSize = "27cm"
                break
        }

        const handleListener = async (e) => {
            if (fimboSize !== e.target.id) {
                actions.stopInterval()
                Loader(true)
                ++counter
                fimboSize = e.target.id
                http.setLocItem('fimsize', fimboSize)
                document.querySelector(".FimboSize__img__chosen").classList.remove("FimboSize__img__chosen")
                e.target.classList.add("FimboSize__img__chosen")
                lessons = []
                currentTrack = 0
                currentPlaylist = 0
                await actions.setupNewFimbo()
                await createFimbos()
            }
        }

        document.getElementById("22cm").addEventListener("click", handleListener)
        document.getElementById("27cm").addEventListener("click", handleListener)
        document.getElementById("32cm").addEventListener("click", handleListener)
    }

    openTrack(el, trackInd, fimInd) {
        el.addEventListener("click", async () => {
            if (!(currentPlaylist === fimInd && currentTrack === trackInd)) {
                let check = false

                document.querySelector(".FimboContainer__item__tracks__item__playing").classList.remove("FimboContainer__item__tracks__item__playing")

                actions.stopInterval()

                if (prevTrack.currentTrack === trackInd && prevTrack.currentPlaylist === fimInd) {
                    check = true
                    prevTrack.prevCurrentNote = prevTrack.currentNote
                    prevTrack.prevCurrentTime = prevTrack.currentTime
                }

                prevTrack.currentPlaylist = currentPlaylist
                prevTrack.currentTrack = currentTrack

                const track = lessons[currentPlaylist].tracks[currentTrack]
                if (track.SboYSllpyCBVdq) {
                    prevTrack.currentTime = document.querySelector(".CurrentPlayingAudio").currentTime
                } else {
                    prevTrack.currentNote = Vars.currentNote
                }

                currentTrack = trackInd
                if (currentPlaylist !== fimInd && lessons[fimInd]) {
                    Loader(true)
                    counter += 10
                    await notes_FIM.setupNotes(lessons[fimInd].aMnLqmVhevDReoE[`size${fimboSize.slice(0, 2)}`], lessons[fimInd].nlTtZEPsurwsb)
                }
                currentPlaylist = fimInd


                if (!lessons[currentPlaylist]) {
                    await actions.setupNewFimbo()
                }
                if (lessons[currentPlaylist]) {
                    const p = setInterval(() => {
                        if (counter === 0) {
                            if (!Vars.trackPlaying) {
                                document.getElementById('playEl').children[0].innerHTML = document.getElementById('pauseSVG').innerHTML
                                Vars.trackPlaying = true
                            }
                            actions.initTrack(check)
                            clearInterval(p)
                        }
                    }, 300)
                }

                document.getElementById(`${fimbos[currentPlaylist].uMBykHYhkxkbOC}_${currentTrack}`).classList.add("FimboContainer__item__tracks__item__playing")
            }
        })
    }

    openVolume() {
        const Button = document.getElementById('volumeEl')
        const circle = document.getElementById('circleProgEl')
        const par = document.getElementById('volumeParCont')

        Button.addEventListener("click", () => {
            if (Button.classList.contains("ElementActive")) {
                par.classList.add("volumeContainerAfterGo")
                par.classList.remove("volumeContainerAfter")
                par.parentNode.classList.remove("BigZIndex")
                circle.style.height = 0
                Button.classList.remove("ElementActive")
                document.querySelector(".BackForMode").remove()
            } else {
                par.classList.remove("volumeContainerAfterGo")
                par.classList.add("volumeContainerAfter")
                par.parentNode.classList.add("BigZIndex")
                circle.style.height = "12px"
                Button.classList.add("ElementActive")
                const div = document.createElement('div')
                div.classList.add('BackForMode')
                div.onclick = () => {
                    par.classList.add("volumeContainerAfterGo")
                    par.classList.remove("volumeContainerAfter")
                    par.parentNode.classList.remove("BigZIndex")
                    circle.style.height = 0
                    Button.classList.remove("ElementActive")
                    div.remove()
                }
                document.querySelector(`.volumeContainer`).parentNode.append(div)

            }
        })
    }

    volumeSlider() {
        const Par = document.getElementById("volume_par")
        const Daug = document.getElementById("volume_prog")
        Daug.style.height = `${volumeS}%`

        Par.addEventListener("mousedown", (e) => {
            e.preventDefault()
            const rect = Par.getBoundingClientRect();
            const height = Par.clientHeight
            const check = (e.clientY - rect.top) < height ? (e.clientY - rect.top) : height;
            const offsetY = height - (check > 0 ? check : 0);
            const progress = (offsetY / height);
            volumeS = progress * 100
            Daug.style.height = `${(progress) * 100}%`

            const mouseMoveHandler = (e) => {
                e.preventDefault()
                const check = (e.clientY - rect.top) < height ? (e.clientY - rect.top) : height;
                const offsetY = height - (check > 0 ? check : 0);
                const progress = (offsetY / height) * 100;
                volumeS = progress
                Daug.style.height = `${progress}%`
            };

            const mouseUpHandler = (e) => {
                e.preventDefault()
                const check = (e.clientY - rect.top) < height ? (e.clientY - rect.top) : height;
                const offsetY = height - (check > 0 ? check : 0);
                const progress = (offsetY / height) * 100
                http.setLocItem('volumelvl', progress)

                if (Vars.audio) {
                    Vars.audio.volume = volumeS / 100
                }

                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            }
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        })

        Par.addEventListener('touchstart', (event) => {
            const rect = Par.getBoundingClientRect();
            const height = Par.clientHeight
            const check = (event.touches[0].clientY - rect.top) < height ? (event.touches[0].clientY - rect.top) : height;
            const offsetY = height - (check > 0 ? check : 0);
            const progress = (offsetY / height);
            volumeS = progress * 100
            Daug.style.height = `${(progress) * 100}%`

            const touchMoveHandler = (e) => {
                if (e.cancelable) e.preventDefault();
                const check = (e.touches[0].clientY - rect.top) < height ? (e.touches[0].clientY - rect.top) : height;
                const offsetY = height - (check > 0 ? check : 0);
                const progress = (offsetY / height) * 100;
                volumeS = progress
                Daug.style.height = `${progress}%`
            };

            const touchEndHandler = (e) => {
                const check = (e.changedTouches[0].clientY - rect.top) < height ? (e.changedTouches[0].clientY - rect.top) : height;
                const offsetY = height - (check > 0 ? check : 0);
                const progress = (offsetY / height) * 100;
                http.setLocItem('volumelvl', progress)

                if (Vars.audio) {
                    Vars.audio.volume = volumeS / 100
                }

                document.removeEventListener('touchmove', touchMoveHandler);
                document.removeEventListener('touchend', touchEndHandler);
            }
            document.addEventListener('touchmove', touchMoveHandler, {passive: false});
            document.addEventListener('touchend', touchEndHandler);
        }, {passive: true})
    }

    durationSlider() {
        const Par = document.getElementById("slidder")
        const Daug = document.getElementById("slidder_prog")

        Par.addEventListener("mousedown", (event) => {
            event.preventDefault()
            const rect = Par.getBoundingClientRect();
            const width = Par.clientWidth
            const check = (event.clientX - rect.left) < width ? (event.clientX - rect.left) : width;
            const offsetX = check > 0 ? check : 0;
            const progress = (offsetX / width);
            Vars.scrolling = true
            Daug.classList.add("notrans")
            Daug.style.width = `${(progress) * 100}%`

            const mouseMoveHandler = (e) => {
                e.preventDefault()
                const check = (e.clientX - rect.left) < width ? (e.clientX - rect.left) : width;
                const offsetX = check > 0 ? check : 0;
                const progress = (offsetX / width) * 100;
                Daug.style.width = `${progress}%`
            };

            const mouseUpHandler = (e) => {
                e.preventDefault()
                const check = (e.clientX - rect.left) < width ? (e.clientX - rect.left) : width
                const offsetX = check > 0 ? check : 0
                const progress = (offsetX / width)

                if (Vars.audio) {
                    const durationAudio = Vars.audio.duration
                    Vars.audio.currentTime = durationAudio * progress
                } else {
                    actions.stopInterval()
                    Vars.currentNote = Math.floor(progress * Vars.amountNote)
                    if (Vars.currentNote === Vars.amountNote) {
                        Vars.currentNote--
                    }
                    actions.setTimeAndProgress()

                    if (Vars.trackPlaying) {
                        actions.startInterval()
                    }
                }

                Daug.classList.remove("notrans")

                Vars.scrolling = false

                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            }
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        })

        Par.addEventListener('touchstart', (event) => {
            const rect = Par.getBoundingClientRect();
            const width = Par.clientWidth
            const check = (event.touches[0].clientX - rect.left) < width ? (event.touches[0].clientX - rect.left) : width;
            const offsetX = check > 0 ? check : 0;
            const progress = (offsetX / width) * 100;
            Vars.scrolling = true
            Daug.classList.add("notrans")
            Daug.style.width = `${progress}%`

            const touchMoveHandler = (e) => {
                if (e.cancelable) e.preventDefault();
                const check = (e.touches[0].clientX - rect.left) < width ? (e.touches[0].clientX - rect.left) : width;
                const offsetX = check > 0 ? check : 0;
                const progress = (offsetX / width) * 100;
                Daug.style.width = `${progress}%`
            };

            const touchEndHandler = (e) => {
                const check = (e.changedTouches[0].clientX - rect.left) < width ? (e.changedTouches[0].clientX - rect.left) : width;
                const offsetX = check > 0 ? check : 0;
                const progress = (offsetX / width);

                if (Vars.audio) {
                    const durationAudio = Vars.audio.duration
                    Vars.audio.currentTime = durationAudio * progress
                } else {
                    actions.stopInterval()
                    Vars.currentNote = Math.floor(progress * Vars.amountNote)
                    if (Vars.currentNote === Vars.amountNote) {
                        Vars.currentNote--
                    }
                    actions.setTimeAndProgress()
                    if (Vars.trackPlaying) {
                        actions.startInterval()
                    }
                }

                Daug.classList.remove("notrans")

                Vars.scrolling = false

                document.removeEventListener('touchmove', touchMoveHandler);
                document.removeEventListener('touchend', touchEndHandler);
            }
            document.addEventListener('touchmove', touchMoveHandler, {passive: false});
            document.addEventListener('touchend', touchEndHandler);
        }, {passive: true})
    }

    playTrack() {
        const play = document.getElementById('playEl')

        const funcPlay = () => {
            if (!Vars.error) {
                if (Vars.trackPlaying) {
                    play.children[0].innerHTML = document.getElementById('playSVG').innerHTML
                    actions.stopInterval()
                    Vars.trackPlaying = false
                } else {
                    play.children[0].innerHTML = document.getElementById('pauseSVG').innerHTML
                    Vars.trackPlaying = true
                    actions.startInterval()
                }
            }
        }

        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault()
                funcPlay()
            }
        })

        play.addEventListener('click', funcPlay)
    }

    nextTrack() {
        const next = document.getElementById('nextEl')
        next.addEventListener('click', () => {
            currentTrack = currentTrack + 1 >= lessons[currentPlaylist].tracks.length ? 0 : currentTrack + 1
            actions.updateTrack()
        })
    }

    prevTrack() {
        const prev = document.getElementById("prevEl")
        prev.addEventListener('click', () => {
            currentTrack = currentTrack - 1 < 0 ? lessons[currentPlaylist].tracks.length - 1 : currentTrack - 1
            actions.updateTrack()
        })
    }

    lisLike(like, id) {
        like.addEventListener("click", () => {

            if (like.classList.contains("button__like__active")) {
                const delInd = soundLikes.findIndex((ent) => ent.fimbo_id === id)

                like.classList.remove("button__like__active")

                fetc.setLike(id, "fimbo", 2).then(() => {
                    soundLikes.splice(delInd, 1)
                    InitProgress.checkProg()
                }).catch(() => {
                    like.classList.add("button__like__active")
                    http.showError()
                })
            } else {

                like.classList.add("button__like__active")

                fetc.setLike(id, "fimbo", 2).then(() => {
                    soundLikes.push({fimbo_id: id})
                    InitProgress.checkProg()
                }).catch(() => {
                    like.classList.remove("button__like__active")
                    http.showError()
                })
            }
        })
    }

}

const Listener = new Listeners()

class Actions {
    async chooseTrack() {
        document.getElementById(`${fimbos[currentPlaylist].uMBykHYhkxkbOC}_${currentTrack}`).classList.add("FimboContainer__item__tracks__item__playing")
        if (!lessons[currentPlaylist]) {
            await actions.setupNewFimbo()
        }
        if (lessons[currentPlaylist]) {
            actions.initTrack()
        }
    }

    async setupNewFimbo() {
        Loader(true)
        counter += 11
        lessons[currentPlaylist] = await fetc.fetchFimbo(fimbos[currentPlaylist].koKSFvCjCYRrwA)
        lessons[currentPlaylist].tracks = [...lessons[currentPlaylist].audios, ...lessons[currentPlaylist].lessons]
        delete lessons[currentPlaylist].audios
        delete lessons[currentPlaylist].lessons
        await notes_FIM.setupNotes(lessons[currentPlaylist].aMnLqmVhevDReoE[`size${fimboSize.slice(0, 2)}`], lessons[currentPlaylist].nlTtZEPsurwsb)
    }

    initTrack(flag) {
        Vars.error = false

        const track = lessons[currentPlaylist].tracks[currentTrack]

        const blockCont1 = document.getElementById("trackName1")
        blockCont1.innerHTML = fimbos[currentPlaylist].mOFICyXDAMTxQcbr + " - " + track.wIgMHkeuBreFL
        const blockCont2 = document.getElementById("trackName2")
        blockCont2.innerHTML = fimbos[currentPlaylist].mOFICyXDAMTxQcbr + " - " + track.wIgMHkeuBreFL

        if (blockCont1.offsetWidth > document.getElementById("trackCont").offsetWidth) {
            blockCont2.style.display = "inline-block"
            blockCont1.style.animation = "none"
            blockCont2.style.animation = "none"
            setTimeout(() => {
                blockCont1.style.animation = '6s linear marquee infinite'
                blockCont2.style.animation = '6s linear marquee infinite'
            })
        } else {
            blockCont2.style.display = "none"
            blockCont1.style.animation = "none"
            blockCont2.style.animation = "none"
        }

        if (track.SboYSllpyCBVdq) {
            Vars.audio = El.createAudio(track)
            if (flag)
                Vars.audio.currentTime = prevTrack.prevCurrentTime
        } else {
            Vars.bpm = 1 / (track.QVszCaHtEWZaCM / 60) * 1000
            Vars.amountNote = track.CVzpdIQXToIFaGid * track.xnlXFpKuAHzW
            Vars.currentNote = 0
            if (Vars.audio) {
                Vars.audio.pause()
                Vars.audio = null
            }
            if (flag)
                Vars.currentNote = prevTrack.prevCurrentNote
        }

        if (Vars.trackPlaying) {
            this.startInterval()
        }
        this.setTimeAndProgress()
        this.setCommonTime()
    }

    updateTrack() {
        Vars.error = false
        const parent = document.querySelector(".FimboContainer__item__tracks__item__playing").parentElement
        document.querySelector(".FimboContainer__item__tracks__item__playing").classList.remove("FimboContainer__item__tracks__item__playing")
        parent.children[currentTrack].classList.add("FimboContainer__item__tracks__item__playing")

        let height = 0
        for (let i = 0; i < currentTrack; ++i) {
            height += parent.children[i].clientHeight
        }
        parent.scrollTo({top: height, behavior: "smooth"})

        const track = lessons[currentPlaylist].tracks[currentTrack]

        const blockCont1 = document.getElementById("trackName1")
        blockCont1.innerHTML = fimbos[currentPlaylist].mOFICyXDAMTxQcbr + " - " + track.wIgMHkeuBreFL
        const blockCont2 = document.getElementById("trackName2")
        blockCont2.innerHTML = fimbos[currentPlaylist].mOFICyXDAMTxQcbr + " - " + track.wIgMHkeuBreFL

        if (blockCont1.offsetWidth > document.getElementById("trackCont").offsetWidth) {
            blockCont2.style.display = "inline-block"
            blockCont1.style.animation = "none"
            blockCont2.style.animation = "none"
            setTimeout(() => {
                blockCont1.style.animation = '6s linear marquee infinite'
                blockCont2.style.animation = '6s linear marquee infinite'
            })
        } else {
            blockCont2.style.display = "none"
            blockCont1.style.animation = "none"
            blockCont2.style.animation = "none"
        }

        if (track.SboYSllpyCBVdq) {
            Vars.audio = El.createAudio(track)
        } else {
            Vars.bpm = 1 / (track.QVszCaHtEWZaCM / 60) * 1000
            Vars.amountNote = track.CVzpdIQXToIFaGid * track.xnlXFpKuAHzW
            Vars.currentNote = 0

            if (Vars.audio) {
                Vars.audio.pause()
                Vars.audio = null
            }
        }

        this.setCommonTime()
        this.setTimeAndProgress()
        this.stopInterval()
        if (Vars.trackPlaying) {
            this.startInterval()
        }
    }

    setCommonTime() {
        let min, sec
        const track = lessons[currentPlaylist].tracks[currentTrack]
        if (track.SboYSllpyCBVdq) {
            Vars.audio.addEventListener('loadedmetadata', () => {
                const duration = Vars.audio.duration
                min = Math.floor(duration / 60)
                sec = Math.floor(duration % 60)
                document.getElementById('comtime').innerHTML = `${min}:${sec < 10 ? `0${sec}` : sec}`
                --counter
                Loader()
            });
        } else {
            const time = Vars.bpm / 1000 * (track.CVzpdIQXToIFaGid * track.xnlXFpKuAHzW)
            min = Math.floor(time / 60)
            sec = Math.floor(time % 60)
            document.getElementById('comtime').innerHTML = `${min}:${sec < 10 ? `0${sec}` : sec}`
        }
    }

    setTimeAndProgress() {
        if (lessons[currentPlaylist]) {
            const track = lessons[currentPlaylist].tracks[currentTrack]
            if (track.SboYSllpyCBVdq) {
                const {duration, currentTime} = Vars.audio
                if (duration && currentTime) {
                    const progress = (currentTime / duration) * 100
                    const min = Math.floor(currentTime / 60)
                    const sec = Math.floor(currentTime % 60)
                    document.getElementById('curtime').innerHTML = `${min}:${sec < 10 ? `0${sec}` : sec}`
                    document.getElementById('slidder_prog').style.width = `${progress}%`
                } else {
                    document.getElementById('curtime').innerHTML = "0:00"
                    document.getElementById('slidder_prog').style.width = `0%`
                }
            } else {
                const min = Math.floor((Vars.bpm / 1000 * Vars.currentNote) / 60)
                const sec = Math.floor((Vars.bpm / 1000 * Vars.currentNote) % 60)
                document.getElementById('curtime').innerHTML = `${min}:${sec < 10 ? `0${sec}` : sec}`
                document.getElementById('slidder_prog').style.width = `${Vars.currentNote / Vars.amountNote * 100}%`
            }
        }
    }

    stopInterval() {
        const track = lessons[currentPlaylist].tracks[currentTrack]
        if (track.SboYSllpyCBVdq) {
            Vars.audio.pause()
        } else {
            clearInterval(interval)
        }
    }

    startInterval() {
        const track = lessons[currentPlaylist].tracks[currentTrack]

        if (track.SboYSllpyCBVdq) {
            Vars.audio.play()
        } else {
            player.playNote(track.FdsQfOHKQfuAIEPY[Vars.currentNote])
            interval = setInterval(() => {
                Vars.currentNote += 1

                if (!Vars.scrolling)
                    this.setTimeAndProgress()

                if (Vars.currentNote >= Vars.amountNote) {
                    this.endTrack()
                } else {
                    if (!track.SboYSllpyCBVdq) {
                        player.playNote(track.FdsQfOHKQfuAIEPY[Vars.currentNote])
                    }
                }
            }, Vars.bpm)
        }
    }

    endTrack() {
        this.stopInterval()
        Vars.currentNote = 0
        if (currentTrack + 1 >= lessons[currentPlaylist].tracks.length) {
            Vars.trackPlaying = false
            currentTrack = 0
            this.updateTrack()
            document.getElementById('playEl').children[0].innerHTML = document.getElementById('playSVG').innerHTML
            return
        }
        currentTrack += 1
        this.updateTrack()
    }

}

const actions = new Actions()

class Elements {
    createName(nam, url) {
        const block = document.createElement('div')
        block.classList.add("FimboContainer__item__name")
        const name = document.createElement('a')
        name.classList.add("FimboContainer__item__name_a")
        const text = document.createElement('div')
        text.innerHTML = `${nam}`
        text.classList.add("FimboContainer__item__name_text")
        name.href = url
        name.append(text)

        block.append(name)
        return block
    }

    createTracks(tracks, fimPath, indexFim) {
        const tracksCont = document.createElement('div')
        tracksCont.classList.add("FimboContainer__item__tracks")

        const createTrack = (ent, index) => {

            const cont = document.createElement('div')
            cont.classList.add("FimboContainer__item__tracks__item")
            cont.id = fimPath + "_" + index

            const img = document.createElement('img')
            img.classList.add("FimboContainer__item__tracks__item__name__img")
            if (ent.SboYSllpyCBVdq)
                img.src = `${HOST}/files/audio/${fimPath}/${ent.iIaOapaFSQCsS}/${ent.SboYSllpyCBVdq}/${ent.tJKeQfhGwPXKhNoe}/${ent.DPzOQzfuqZMXl}`
            else
                img.src = `${HOST}/files/cover/${fimPath}/${ent.tJKeQfhGwPXKhNoe}/${ent.DPzOQzfuqZMXl}`
            img.loading = "lazy"

            const name = document.createElement('div')
            name.classList.add("FimboContainer__item__tracks__item__name")
            name.innerHTML = ent.wIgMHkeuBreFL

            if (ent.SboYSllpyCBVdq)
                name.style.fontWeight = "600"

            Listener.openTrack(cont, index, indexFim)

            cont.append(img, name)
            tracksCont.append(cont)
        }

        tracks.forEach((ent, index) => createTrack(ent, index))

        return tracksCont
    }

    createImg(path, imgPath) {
        const container = document.createElement('div')
        container.classList.add('FimboContainer__item__ImgС')

        const img = document.createElement('img')
        img.loading = "lazy"
        img.classList.add("FimboContainer__item__img")
        img.src = `${HOST}/files/cover/${path}/${imgPath}`

        container.append(img)
        return container
    }

    createBasket(url, id) {
        const basketRow = document.createElement('div')
        basketRow.classList.add('FimboContainer__item__basket__cont')

        const basketCont = document.createElement('a')
        basketCont.href = url
        basketCont.classList.add("FimboContainer__item__basket")
        const basket = document.createElementNS(xmlnsPath, 'svg')
        basket.setAttribute('width', "18")
        basket.setAttribute('height', "20")
        basket.setAttribute('viewBox', "0 0 16 18")
        basket.innerHTML = document.getElementById("cartSVG").innerHTML
        basketCont.append(basket)

        const like = this.createLike(id)

        basketRow.append(like, basketCont)

        return basketRow
    }

    createAudio(el) {
        if (Vars.audio) {
            Vars.audio.pause()
        }

        Loader(true)
        ++counter

        if (document.querySelector(".CurrentPlayingAudio"))
            document.querySelector(".CurrentPlayingAudio").remove()

        const item = document.getElementById(`${fimbos[currentPlaylist].uMBykHYhkxkbOC}_${currentTrack}`)
        const audio = document.createElement('audio')
        audio.classList.add('CurrentPlayingAudio')
        audio.src = `${HOST}/files/audio/${fimbos[currentPlaylist].uMBykHYhkxkbOC}/${el.iIaOapaFSQCsS}/${el.SboYSllpyCBVdq}/${el.tJKeQfhGwPXKhNoe}/${el.EBVLqrFaLx}`

        audio.volume = volumeS / 100

        audio.onerror = () => {
            Vars.error = true
            item.style.color = "#eb4242"
            item.style.textDecoration = "line-through"
        }
        audio.ontimeupdate = () => {
            if (!Vars.scrolling)
                actions.setTimeAndProgress()
        }
        document.getElementById("spaceForAudio").append(audio)
        return audio
    }

    createLike(id){
        const heartCont = document.createElement('div')
        heartCont.classList.add("FimboContainer__item__like")

        const heart = document.createElementNS(xmlnsPath, 'svg')
        heart.innerHTML = document.getElementById("heartSVG").innerHTML
        heart.setAttribute('width', "22")
        heart.setAttribute('height', "22")
        heart.setAttribute('viewBox', "0 0 26 23")
        heartCont.append(heart)

        Listener.lisLike(heartCont, id)

        const indC = soundLikes.findIndex((entG) => entG.fimbo_id === id)
        if (indC !== -1) {
            heartCont.classList.add("button__like__active")
        }

        return heartCont
    }

}

const El = new Elements()


const createFimbos = async () => {
    fimbos = await fetc.fetchFimbos()

    fimbos.forEach((ent) => {
        ent.tracks = [...ent.audios, ...ent.lessons]
        delete ent.audios
        delete ent.lessons
    })

    const container = document.getElementById("FimboContainer")
    container.innerHTML = ""

    fimbos.forEach((ent, index) => {
        const cont = document.createElement('div')
        cont.classList.add("FimboContainer__item")
        cont.id = 'fimCont' + ent.koKSFvCjCYRrwA

        const name = El.createName(ent.mOFICyXDAMTxQcbr, ent.WAFWANDViyJl)

        const tracks = El.createTracks(ent.tracks, ent.uMBykHYhkxkbOC, index)

        const img = El.createImg(ent.uMBykHYhkxkbOC, ent.pEPCppRIOdbowR)

        const basket = El.createBasket(ent.WAFWANDViyJl, ent.koKSFvCjCYRrwA)

        cont.append(name, tracks, img, basket)

        container.append(cont)
    })

    await actions.chooseTrack()
}

const start = async () => {
    Loader(true)
    counter += 3

    InitClient.tokenInit().then(async () => {

        HOST = await fetc.fetchHos()

        Listener.chooseFimboSize()

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