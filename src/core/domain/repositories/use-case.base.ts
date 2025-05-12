export interface UserCase<Command, Response> {
    execute(command: Command): Promise<Response | void>;
}