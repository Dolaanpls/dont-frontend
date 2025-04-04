import brouteur from './data/brouteur.json';

export type Choice = {
    id: string;
    message: string;
    nextNodeId: string;
    successPercentage: number;
};

export type Message = {
    id: string;
    message: string;
    choices: Choice[];
}

export type ChatFlowChart = {
    root: Message;
} & Record<string, Message>;

const flowCharts: Record<string, ChatFlowChart> = {
    brouteur,
};

export const getFlowChart = async (id: string) => flowCharts[id];