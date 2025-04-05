import brouteur from './data/brouteur.json';

export type Choice = {
    id: string;
    message: string;
    nextNodeId?: string;
    nextAnswerId?: string;
    successPercentage: number;
};

export type Message = {
    id: string;
    message: string;
    choiceIds: string[];
}

export type FlowChart = {
    choices: Record<string, Choice>;
    messages: {
        root: Message;
    } & Record<string, Message>;
};

export type Chat = {
    chart: FlowChart;
    username: string;
};

const flowCharts: Record<string, Chat> = {
    brouteur,
};

export const getFlowChart = async (id: string) => flowCharts[id];