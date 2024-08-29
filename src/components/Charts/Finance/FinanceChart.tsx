"use client";
import Image from "next/image";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
 
interface MyComponentProps {
    className?: string;
    data: any
}

export const FinanceChart: React.FC<MyComponentProps> = ({ className = '', data})  => {
    return (
        <div className={`${className} w-full h-[500px]`}>
            <div className="bg-white rounded-xl w-full h-full p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold">Finance</h1>
                    <Image src="/moreDark.png" alt="" width={20} height={20} />
                </div>
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: "#d1d5db" }}
                        tickLine={false}
                        tickMargin={10}
                    />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}  tickMargin={20}/>
                    <Tooltip />
                    <Legend
                        align="center"
                        verticalAlign="top"
                        wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
                    />
                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#C3EBFA"
                        strokeWidth={5}
                    />
                    <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
  