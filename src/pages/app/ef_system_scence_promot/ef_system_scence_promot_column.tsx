import {ProColumns} from '@ant-design/pro-components';

export const ef_system_scence_promot_columns = (): ProColumns<any>[] => [
  {
    "title": "title",
    "dataIndex": "title",
    "valueType": "text"
  },
  {
    "title": "prompt",
    "dataIndex": "prompt",
    "valueType": "text",
    ellipsis:true,
    copyable: true,
  },
  {
    title: "update_time",
    dataIndex: "update_time",
    valueType: "dateTime",
    hideInSearch: true,
    hideInForm: true,
  },
  {
    key: "update_time",
    title: "update_time",
    dataIndex: "update_time_range",
    valueType: "dateTimeRange",
    hideInTable: true,
    hideInForm: true,
    hideInDescriptions: true,
  },
];
