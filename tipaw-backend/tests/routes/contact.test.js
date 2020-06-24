import chai from 'chai';
import chaiHttp from 'chai-http';
import { contactRequestMock } from '../mocks/contact-request-mock';
const express = require("express");
const contact = require('../../routes/contact');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/', contact);


chai.use(chaiHttp);
chai.should();
describe('Contact', () => {
    describe('POST /', () => {
        it('should save the contact request and return a success if the data is valid', (done) => {
            let contactRequest = {...contactRequestMock};
            chai.request(app)
                .post('/')
                .set('content-type', 'application/json')
                .send(contactRequest)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

        // Test to get single student record
        it('should not save the contact request if the data is invalid, and throw an error', (done) => {
            let invalidContactRequestMock = { ...contactRequestMock };
            invalidContactRequestMock.subject = null;
            chai.request(app)
                .post('/')
                .send(invalidContactRequestMock)
                .end((err, res) => {
                    res.should.have.status(500); // as subject is required and missing to create the schema
                    done();
                });
        });
    });
});