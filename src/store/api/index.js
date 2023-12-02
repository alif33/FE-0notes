import { Article, useGetArticlesQuery } from './article'
import { Pattern, useGetPatternsQuery, useGetPatternQuery } from './pattern'
import { Project, useGetProjectsQuery, useGetProjectQuery } from './project'
import { Board, useGetBoardsQuery, useGetBoardQuery, useAddBoardMutation } from './board'
import { Task, useGetTasksQuery, useGetTaskQuery, useUpdateTaskMutation } from './task'

export { 
  Article,
  useGetArticlesQuery,  

  Pattern,
  useGetPatternsQuery,
  useGetPatternQuery,

  Project,
  useGetProjectsQuery, 
  useGetProjectQuery,

  Board, 
  useGetBoardsQuery, 
  useGetBoardQuery, 
  useAddBoardMutation,

  Task,
  useGetTasksQuery,
  useGetTaskQuery,
  useUpdateTaskMutation
}