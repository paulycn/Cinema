const movie= {
    name:"Barbie",
    tickets:[
        [
            {
                seat: "1A",
                price: 200,
                occupied: false
            },
            {
                seat: "1B",
                price: 200,
                occupied: false
            },
            {
                seat: "1C",
                price: 200,
                occupied: false
            },
            {
                seat: "1D",
                price: 200,
                occupied: false
            }
        ],
        [
            {
                seat: "2A",
                price: 350,
                occupied: false
            },
            {
                seat: "2B",
                price: 350,
                occupied: false
            },
            {
                seat: "2C",
                price: 350,
                occupied: false
            },
            {
                seat: "2D",
                price: 350,
                occupied: false
            },
            {
                seat: "2E",
                price: 350,
                occupied: false
            },
        ],
        [
            {
                seat: "3A",
                price: 450,
                occupied: false
            },
            {
                seat: "3B",
                price: 450,
                occupied: false
            },
            {
                seat: "3C",
                price: 450,
                occupied: false
            },
            {
                seat: "3D",
                price: 450,
                occupied: false
            },
            {
                seat: "3E",
                price: 450,
                occupied: false
            },
        ],
        [
            {
                seat: "4A",
                price: 500,
                occupied: false
            },
            {
                seat: "4B",
                price: 500,
                occupied: false
            },
            {
                seat: "4C",
                price: 500,
                occupied: false
            },
            {
                seat: "4D",
                price: 500,
                occupied: false
            },
            {
                seat: "4E",
                price: 500,
                occupied: false
            },
        ]
    ]
}

const main = document.querySelector("#main")
const result = document.querySelector("#result")

let seats

function showSeats() {
    main.innerHTML =""
    movie.tickets.forEach(row => {
        let rowDiv = document.createElement("div")
        rowDiv.classList.add("row")
        row.forEach(seat => {
            rowDiv.innerHTML += `
                <div class="seat ${seat.occupied ? 'occupied' : ''}" data-seat="${seat.seat}"></div>
            `
        })
        main.appendChild(rowDiv)
    })

    seats = document.querySelectorAll(".seat")
    checkSeats(seats)
    showSum()
}

function checkSeats(seats) {
    seats.forEach(seat => {
        seat.addEventListener("click", () => {
            let value = seat.getAttribute("data-seat")
            for (let i = 0; i < movie.tickets.length; i++) {
                for (let j = 0; j < movie.tickets[i].length; j++) {
                    if (value === movie.tickets[i][j].seat) {
                        movie.tickets[i][j].occupied = movie.tickets[i][j].occupied ? false : true
                    } 
                }
            }
            showSeats()
        })
    })
}

function showSum() {
    let ticketsInCart = []

    for (let i = 0; i < movie.tickets.length; i++) {
        for (let j = 0; j < movie.tickets[i].length; j++) {
            if (movie.tickets[i][j].occupied) {
                ticketsInCart.push(movie.tickets[i][j])
            }
        }
    }

    let sum = ticketsInCart.reduce((s, ticket) => s + ticket.price, 0)

    result.innerHTML = ""

    ticketsInCart.forEach(t => {
        result.innerHTML += `<em>${t.seat} = ${t.price}</em> `
    })

    result.innerHTML += `<strong> ${sum} MDL</strong>`
}

showSeats()

document.body.append(`Movie:${movie.name}`)