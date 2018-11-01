import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import EmployeeList from '../EmployeeList';


describe('EmployeeList.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            courses: [
                { id: 1, title: 'Java Clean Code' },
                { id: 2, title: 'Java The Good Pards' },                
            ],
            handleRowSelect: jest.fn()            
        };
        
        const wrapper = shallow(<EmployeeList {...props}/>);

        expect(wrapper).toHaveLength(1);
        expect(wrapper.find('BootstrapTable')).toHaveLength(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });
});
