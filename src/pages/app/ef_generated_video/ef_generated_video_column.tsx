import {ProColumns} from '@ant-design/pro-components';

export const ef_generated_video_columns = (): ProColumns<any>[] => [
  {
    "title": "topic",
    "dataIndex": "topic",
    "valueType": "text",
    ellipsis:true,
    copyable: true,
  },
  {
    "title": "prompt",
    "dataIndex": "prompt",
    "valueType": "text",
    ellipsis:true,
    copyable: true,
  },
  {
    "title": "language",
    "dataIndex": "language",
    "valueType": "text"
  },
  {
    "title": "voice_provider",
    "dataIndex": "voice_provider",
    "valueType": "text"
  },
  {
    "title": "voice_id",
    "dataIndex": "voice_id",
    "valueType": "text",
  },
  {
    "title": "video_url",
    "dataIndex": "video_url",
    "valueType": "text",
    ellipsis:true,
    copyable: true,
  },
  {
    "title": "video_length",
    "dataIndex": "video_length",
    "valueType": "text"
  },
  {
    "title": "cover_url",
    "dataIndex": "cover_url",
    "valueType": "text",
    ellipsis:true,
    copyable: true,
  },
  {
    "title": "elapsed",
    "dataIndex": "elapsed",
    "valueType": "text",
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
