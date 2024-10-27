describe('Test 11 API checks', ()=> {

    it('Example expect verification', () =>{
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
            expect(response).to.have.property('status').to.equal(200)
            expect(response.body).to.have.property('status').to.equal('success')
            expect(response.body.data).to.have.property('amount').to.equal('50.0')

            // expect(response.body.data[3]).to.have.property('amount').to.equal('50.0')   при работе с массивом или итератором.. не показал
            // expect(response.body.data[i]).to.have.property('amount').to.equal('50.0')

                console.log(response);
            })
    })

    it.only('Example should verification', () =>{
        const requestBody = {
            "amount":50,
            "phone":"+380686979712",
            "cardCvv":"123",
            "cardExp":"0526",
            "card":"4552331448138217",
            "action":"info",
            "xref":"9a2573036f1e42a7f45b80caddcdeb4d",
            "_":1729797362147
        }

        const headersData = {
            cookie:
                "lsl=1; pubkey=083835b02459aded17aa4a3e2f07460a; lfp=10/21/2024, 7:37:02 PM; pa=1729793250592.09280.8821874172722359next.privat24.ua0.25150450601019503+2; fp=16"
        };

        cy.request({
            method: "POST",
            url: "https://next.privat24.ua/api/p24/pub/mobipay",  // только с VPN на этот ресурс(сайт)
            body: requestBody,
            headers: headersData,
        }).its('body').should('contain', {
            status: 'success'
        }).its('data').should('contain', {
            status: 'ok'
        })
    })
    
})