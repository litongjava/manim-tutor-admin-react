﻿/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/app',
    name: 'App',
    icon: 'form',
    hideInMenu: false,
    routes: [
      {
        path: 'index',
        layout: false,
        name: 'Index',
        component: './Welcome',
      },
      {
        path: 'app_user2',
        layout: false,
        name: 'app_user2',
        component: './app/app_user2/app_user2_index',
      },
      {
        path: 'ef_user_blocked',
        layout: false,
        name: 'ef_user_blocked',
        component: './app/ef_user_blocked/ef_user_blocked_index',
      },
      {
        path: 'ef_ugvideo',
        layout: false,
        name: 'ef_ugvideo',
        component: './app/ef_ugvideo/ef_ugvideo_index',
      },
      {
        path: 'ef_generated_video',
        layout: false,
        name: 'ef_generated_video',
        component: './app/ef_generated_video/ef_generated_video_index',
      },
      {
        path: 'ef_manin_sence_code',
        layout: false,
        name: 'ef_manin_sence_code',
        component: './app/ef_manin_sence_code/ef_manin_sence_code_index',
      },
      {
        path: 'ef_llm_usage',
        layout: false,
        name: 'ef_llm_usage',
        component: './app/ef_llm_usage/ef_llm_usage_index',
      },
      {
        path: 'ef_system_scence_prompt',
        layout: false,
        name: 'ef_system_scence_prompt',
        component: './app/ef_system_scence_prompt/ef_system_scence_prompt_index',
      },
      {
        path: 'ef_avoid_erroneous_prompt',
        layout: false,
        name: 'ef_avoid_erroneous_prompt',
        component: './app/ef_generate_code_avoid_error_prompt/ef_generate_code_avoid_error_prompt_index',
      },
      {
        path: 'ef_generated_video_better',
        layout: false,
        name: 'ef_generated_video_better',
        component: './app/ef_generated_video_better/ef_generated_video_better_index',
      },
      {
        path: 'ef_config',
        layout: false,
        name: 'ef_config',
        component: './app/ef_config/ef_config_index',
      },
    ]
  },
  {
    path: '/file',
    name: 'file',
    icon: 'FolderOutlined',
    hideInMenu: false,
    routes: [
      {
        path: '/file/images',
        name: 'Images',
        hideInMenu: false,
        component: './file/images/imagesIndex',
      },
      {
        path: '/file/docx',
        name: 'Docx',
        hideInMenu: false,
        component: './file/docx/systemDocxIndex',
      },
      {
        path: '/file/pdf',
        name: 'Pdf',
        hideInMenu: false,
        component: './file/pdf/systemPdfIndex',
      },
    ]
  },
  {
    path: '/article',
    name: 'article',
    icon: 'FileWordOutlined',
    routes: [
      {
        path: '/article/create/:id',
        name: 'Create Article',
        hideInMenu: false,
        component: './article/article/createArticle',
      },
      {
        path: 'articleCategory',
        name: 'Category',
        component: './article/articleCategory/articleCategoryIndex',
      },
      {
        path: '/article/author',
        name: 'Author',
        hideInMenu: false,
        component: './article/author/authorIndex',
      },
      {
        path: '/article/tag',
        name: 'Tag',
        hideInMenu: false,
        component: './article/tag/tagIndex',
      },
      {
        path: '/article/article',
        name: 'Article',
        hideInMenu: false,
        component: './article/article/articleIndex',
      },
    ],
  },
  {
    path: '/system',
    name: 'system',
    icon: 'setting',
    hideInMenu: false,
    routes: [
      {
        path: '/system/constants',
        name: 'Constants',
        component: './system/constants/systemConstantsIndex',
      },
      {
        path: '/system/uploadFile',
        name: 'Upload File',
        hideInMenu: false,
        component: './system/uploadFile/uploadFileIndex',
      },
      {
        path: '/system/url',
        name: 'url',
        hideInMenu: false,
        component: './system/urls/systemUrlsIndex',
      },
      {
        path: '/system/access_log',
        name: 'access_log',
        hideInMenu: false,
        component: './system/access_log/access_log_index',
      },
      {
        path: '/system/article_access_log',
        name: 'article_access_log',
        hideInMenu: false,
        component: './system/article_access_log/access_log_index',
      },
    ]
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: './user/login',
      },
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        name: 'register-result',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/user/register',
        component: './user/register',
      },
      {
        component: '404',
        path: '/user/*',
      },
    ],
  },
  {
    name: 'account',
    icon: 'user',
    path: '/account',
    routes: [
      {
        path: '/account',
        redirect: '/account/settings',
      },
      {
        name: 'settings',
        icon: 'smile',
        path: '/account/settings',
        component: './account/settings',
      },
    ],
  },
  {
    path: '/article/:id',
    hideInMenu: true,
    layout: false,
    name: 'PreviewArticle',
    component: './article/article/previewArticle',
  },
  {
    path: '/docx/:id',
    //hideInMenu: true,
    layout: false,
    name: 'PreviewDocx',
    component: './file/docx/previewDocx',
  },
  {
    path: '/pdf/:id',
    //hideInMenu: true,
    layout: false,
    name: 'PreviewPDF',
    component: './file/pdf/previewPdf',
  },

  {
    path: '/',
    redirect: '/app/index',
  },
  {
    component: '404',
    path: '/*',
  },
];
