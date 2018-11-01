import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {AddOrEditEmployeeContainer} from '../AddOrEditEmployeeContainer';


describe('AddOrEditEmployeeContainer.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            action: {
                getEmployeeAction: jest.fn(),
                getAuthorsAction: jest.fn()
            },
            authors:[],
            initialValues: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
            match: {params: {id:'1'}}
        };

        const wrapper = shallow(<AddOrEditEmployeeContainer {...props}/>);
        expect(wrapper.length).toEqual(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });

});



    
        