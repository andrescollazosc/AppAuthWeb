export interface BigAlertModel {
    title: string;
    information?: string;
    informationFoot?: string;
    alertType: 'alert alert-success' | 'alert alert-danger' | 'alert alert-info';
}