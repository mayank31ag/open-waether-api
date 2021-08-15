import React from 'react';
import { ArgumentAxis, BarSeries, Chart, ValueAxis } from '../components/TempChart';


describe('<Chart />', () => {
    let render;

    before(() => {
        render = createRender();
    });

    it('should work', () => {
        const wrapper = render(<Chart />);
    });
    it('should work', () => {
        const wrapper = render(<ArgumentAxis />);
        />);
    });
    it('should work', () => {
        const wrapper = render(<BarSeries />);
    });
    it('should work', () => {
        const wrapper = render(<ValueAxis />);
    });
});
