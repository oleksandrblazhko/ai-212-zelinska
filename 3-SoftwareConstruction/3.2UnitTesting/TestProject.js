const chai = require('chai');
const { expect } = chai;

const { yourFunctionForProjectCreation } = require('./models');
const {describe, it} = require("test");
describe('Project Creation', () => {
    it('TC1.1 - should create a project with valid name and description', async () => {
        const result = await yourFunctionForProjectCreation('Проект1', 'Це опис проекту 1');
        expect(result).to.equal(1);
    });

    it('TC1.2 - should not create a project with a name exceeding 100 characters', async () => {
        const result = await yourFunctionForProjectCreation(
            'Дуже довга назва проекту, яка перевищує 100 символів...',
            'Це занадто довгий опис проекту, який перевищує 1000 символів і не підходить...'
        );
        expect(result).to.equal(-1);
    });

    it('TC1.3 - should not create a project with a description exceeding 1000 characters', async () => {
        const result = await yourFunctionForProjectCreation(
            'Дуже довга назва проекту, яка перевищує 100 символів...',
            'Це дуже занадто опис проекту, який перевищує 1000 символів і не підходить ...'
        );
        expect(result).to.equal(-1);
    });

    it('TC1.4 - should not create a project with both name and description exceeding limits', async () => {
        const result = await yourFunctionForProjectCreation(
            'Проект 1',
            'Це занадто довгий опис проекту, який перевищує 1000 символів і не підходить...'
        );
        expect(result).to.equal(-2);
    });
});
