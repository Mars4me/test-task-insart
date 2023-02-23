import React from 'react';
import { ControlledInput } from './ControlledInput';

export const Table = () => {
    return (
        <table className="w-full font-normal text-center table-fixed  h-[200px] md:h-[300px]">
            <thead>
                <tr>
                    <th>
                        Currency/
                        <wbr />
                        Current
                        <br />
                        Date
                    </th>
                    <th>Buy</th>
                    <th>Sell</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>USD/UAH</td>
                    <td>
                        <ControlledInput initialValue={27.5} />
                    </td>
                    <td>
                        <ControlledInput initialValue={27.7} />
                    </td>
                </tr>
                <tr>
                    <td>EUR/UAH</td>
                    <td>
                        <ControlledInput initialValue={32.5} />
                    </td>
                    <td>
                        <ControlledInput initialValue={32.7} />
                    </td>
                </tr>
                <tr>
                    <td>BTC/USD</td>
                    <td>
                        <ControlledInput initialValue={11500} />
                    </td>
                    <td>
                        <ControlledInput initialValue={11700} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
