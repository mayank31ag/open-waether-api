import React from 'react';
import { shallow } from 'enzyme';
import { ArrowForwardIcon, ArrowBackIcon, IconButton } from '../components/Navigation'



describe('Icon Button component', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const iconButton = shallow((<IconButton onClick={mockCallBack}>Ok!</IconButton>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});

describe('ArrowForwardIcon Button component', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const iconButton = shallow((<ArrowForwardIcon onClick={mockCallBack}>Ok!</ArrowForwardIcon>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});

describe('ArrowBackIcon Button component', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const iconButton = shallow((<ArrowBackIcon onClick={mockCallBack}>Ok!</ArrowBackIcon>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});
