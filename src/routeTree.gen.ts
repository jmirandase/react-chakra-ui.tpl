/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as appAboutImport } from './routes/(app)/about'
import { Route as appLandingIndexImport } from './routes/(app)/_landing.index'

// Create/Update Routes

const appAboutRoute = appAboutImport.update({
  id: '/(app)/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const appLandingIndexRoute = appLandingIndexImport.update({
  id: '/(app)/_landing/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(app)/about': {
      id: '/(app)/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof appAboutImport
      parentRoute: typeof rootRoute
    }
    '/(app)/_landing/': {
      id: '/(app)/_landing/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof appLandingIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/about': typeof appAboutRoute
  '/': typeof appLandingIndexRoute
}

export interface FileRoutesByTo {
  '/about': typeof appAboutRoute
  '/': typeof appLandingIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(app)/about': typeof appAboutRoute
  '/(app)/_landing/': typeof appLandingIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/about' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/about' | '/'
  id: '__root__' | '/(app)/about' | '/(app)/_landing/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  appAboutRoute: typeof appAboutRoute
  appLandingIndexRoute: typeof appLandingIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  appAboutRoute: appAboutRoute,
  appLandingIndexRoute: appLandingIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(app)/about",
        "/(app)/_landing/"
      ]
    },
    "/(app)/about": {
      "filePath": "(app)/about.tsx"
    },
    "/(app)/_landing/": {
      "filePath": "(app)/_landing.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
