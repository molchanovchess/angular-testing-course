import { UserInterface } from "../types/user.interface";
import { UsersService } from "./users.service";
import { TestBed } from "@angular/core/testing"

describe('UserService', () => {
    let userService: UsersService
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UsersService],
        });

        userService = TestBed.inject(UsersService)
    });

    it('creates a service', () => {
        expect(userService).toBeTruthy();
    });

    describe('addUser', () => {
        it('should add a user', () => {
            const user: UserInterface = {
                id: '3',
                name: 'foo'
            }
            userService.addUser(user)
            expect(userService.users).toEqual([{id: '3', name: 'foo'}]);
        });
    });
    describe('removeUser', () => {
        it('should remove a user', () => {
            userService.users = [{id: '3', name: 'foo'}];
            userService.removeUser('3');
            expect(userService.users).toEqual([]);
        });

    });
});