/// <reference types="cypress" />

describe('Test 11 API GET POST', () =>{

    it('Example sending the GET request', () =>{

        cy.request('https://unsplash.com/')
            .then((response)=>{
                console.log(response);
            })

    })

    it.only('Example sending the POST request', () =>{

        const requestBody = {
            "amount":50,
            "phone":"+380686979712",
            "cardCvv":"123",
            "cardExp":"0526",
            "card":"4552331448138217",
            "action":"info",
            "xref":"5f808c63b2d7fd635c95f50a61e4d411",
            "_":1729793384433
        }

        const headersData = {
            cookie:
                "pubkey=9a602ff25aa828894d394d4dd4f30f72; lfp=10/21/2024, 7:37:02 PM; pa=1729793250592.09280.8821874172722359next.privat24.ua0.25150450601019503+1; lsl=1; fp=13"
        };

        cy.request({
            method: "POST",
            url: "https://next.privat24.ua/api/p24/pub/mobipay",  // только с VPN на этот ресурс(сайт)
            body: requestBody,
            headers: headersData,
        }).then((response)=>{
                console.log(response.body);
            })

    })
})