// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://google.com')
//   })
// })

/// <reference types="cypress" />

import dayjs from 'dayjs';

it('google test', function(){
  cy.visit('https://google.com')
  cy.get('#APjFqb').type('iot83{enter}')
  cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
})

it('iot test', function(){
    cy.visit('https://www.iot83.com')
    //find by text Sign Up
    // cy.contains('Sign Up', {timeout: 6000}).click()

    //find by button sign up
    cy.get('#menu-item-122 > a > .menu-title-text', {timeout: 6000}).click()
  })

  it.only('fileupload', function(){
    cy.visit('https://demoqa.com')
    cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
    cy.get('#firstName').type('aj')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click()
    cy.get('#userNumber').type('1234567890')
    const nowTime = dayjs().format('DD MM YYYY');
    cy.get('#dateOfBirthInput').nowTime;
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click()
    cy.get('input[type=file]').attachFile('Screenshot.png')
    // cy.get('input[type=file]').should('contains', 'Screenshot.png')
    // cy.get('#uploadPicture').should('contains', 'Screenshot.png')
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click()
    cy.get('#react-select-3-option-0').click()
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click()
    cy.get('#react-select-4-option-0').click()
    cy.get('#submit').click()


  })
  