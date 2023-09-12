'use client'

import React, { Component } from 'react';

class CardProduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
        this.interval = null;
    }

    fetchData = async () => {
        try {
            const res = await fetch(`http://192.168.10.75:3004/${this.props.url}`, { next: { revalidate: 0 } });

            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }

            const dataApi = await res.json();
            const percen = dataApi.payload.data.percen.toFixed(2);
            this.setState({ data: percen });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    componentDidMount() {
        this.fetchData();

        this.interval = setInterval(() => {
            this.fetchData();
        }, 60000);
    }

    render() {
        const { data } = this.state;

        return (
            <div className={`col h-full rounded-[6px] p-[1px] ${data > 80 ? 'bg-[#05A305]' : 'bg-[#FF0000]'}`}>
                <div className="h-[60px] w-[115px] bg-[#D9D9D9] rounded-[6px]">
                    <div className="flex justify-center items-center">
                        <p className="text-[48px]">{this.props.line}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <span className="text-stroke">
                        <p className="text-[64px] text-white">{data} %</p>
                    </span>
                </div>
            </div>
        );
    }
}

export default CardProduction;
