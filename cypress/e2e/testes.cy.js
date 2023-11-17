/// <reference types="cypress" />
import moment from "moment";
import dateUtils from "../support/date-util"

describe('moment', () => {


    it('moment', () => {
       
        var horaagora = dateUtils.mostrahora()
        cy.log('horaagoraaaa',horaagora)
    })
})