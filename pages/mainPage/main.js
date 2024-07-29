const url = "https://admin.fimbo.ru"

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

class Client {

    async tokenInit() {
        const token = http.getLocItem("clientToken")
        if (!token) {
            await fetc.getToken().then((resp) => {
                http.setLocItem("clientToken", resp.token)
            }).catch(() => {
                http.showError()
            })
        } else {
            await fetc.getLikes(1).then((response) => {
                designLikes = response.likes.fimboDesignLikes
                soundLikes = response.likes.fimboSoundLikes
                lessonLikes = response.likes.lessonLikes
                soulLikes = response.likes.soulAnswers
            }).catch(() => {
                http.showError()
            })
        }
    }

}

const InitClient = new Client()

class Listeners {

    constructor() {

    }


}

const Listener = new Listeners()

class Elements {

    showResult(fimbos){
        if (!(fimbos === "In process")) {
            let h = 0
            if (window.innerWidth >= 980){
                h = 90
            }

            window.scrollTo({top: document.getElementById('RooT').offsetTop - h, behavior: "smooth"})
            this.showFimbos(fimbos)
            this.changePrice()
        }
        this.setMarks()
    }

    setMarks(){
        const createMark = () => {
            const svg = document.createElementNS(xmlnsPath, 'svg')
            svg.style.position = "absolute"
            svg.style.bottom = "2px"
            svg.style.left = "2px"
            svg.setAttribute("width", "36")
            svg.setAttribute("height", "36")
            svg.setAttribute("viewBox", "0 0 36 36")
            svg.setAttribute("fill", "none")
            svg.innerHTML = `<path d="M3.74199 16.441C3.03344 16.4431 2.33993 16.6509 1.74169 17.0404C1.14345 17.4299 0.664931 17.9851 0.361499 18.642C0.0580666 19.2988 -0.0578813 20.0303 0.0270694 20.752C0.11202 21.4736 0.394398 22.1558 0.841533 22.7196L10.3734 34.6977C10.7133 35.1306 11.1489 35.4741 11.6442 35.6996C12.1394 35.9251 12.6799 36.0261 13.2209 35.9943C14.3779 35.9305 15.4224 35.2956 16.0884 34.2517L35.8885 1.54019C35.8918 1.53472 35.8951 1.52932 35.8986 1.52399C36.0844 1.23137 36.0241 0.651473 35.6407 0.287176C35.5353 0.187136 35.4111 0.110277 35.2757 0.0613331C35.1404 0.0123891 34.9966 -0.00760381 34.8534 0.00258608C34.7102 0.012776 34.5706 0.0529329 34.443 0.120583C34.3155 0.188234 34.2029 0.281945 34.112 0.395947C34.1049 0.40491 34.0976 0.413738 34.0901 0.422431L14.1213 23.5667C14.0454 23.6548 13.9531 23.7265 13.8499 23.7777C13.7466 23.8288 13.6345 23.8585 13.52 23.8648C13.4056 23.8712 13.291 23.8541 13.183 23.8147C13.075 23.7752 12.9757 23.7141 12.8909 23.635L6.26364 17.4484C5.57535 16.8012 4.67573 16.4418 3.74199 16.441Z" fill="black"/>`
            return svg
        }

        if (designLikes.length > 0){
            document.querySelector(".SquareProg1").append(createMark())
        }
        if(soundLikes.length > 0){
            document.querySelector(".SquareProg2").append(createMark())
        }
        if (lessonLikes.length > 0){
            document.querySelector(".SquareProg3").append(createMark())
        }
        if (soulLikes.length === 3){
            document.querySelector(".SquareProg4").append(createMark())
        }
    }

     showFimbos(fimbos){
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

    changePrice(){
        document.getElementById("sizeOfSale").textContent = " 1000₽"

        document.getElementById("textToContactManager").textContent = "Обратитесь к менеджеру за промокодом!"
    }

}

const El = new Elements()

const start = async () => {
    Loader(true)
    counter += 3

    InitClient.tokenInit().then(async () => {
        HOST = await fetc.fetchHos()

        fimbos = await fetc.fetchFimbos()

        El.showResult( fimbos)
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