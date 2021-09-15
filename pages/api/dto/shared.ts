import { GraphQLResolveInfo } from "graphql";

export declare type IFieldResolver<
  TSource,
  TContext,
  TArgs = Record<string, any>
> = (
  source: TSource,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => any;

export interface AppContext {
  userService: UserService;
}

interface UserService {
  createUser(email: string, password: string): boolean;
}
class UserServiceImpl {
  createUser(email: string, password: string) {
    return true;
  }
}
