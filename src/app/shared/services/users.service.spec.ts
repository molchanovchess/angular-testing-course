import { UserInterface } from "../types/user.interface";
import { UsersService } from "./users.service";
import { TestBed } from "@angular/core/testing"
import { UtilsService } from "./utils.service";

describe('UserService', () => {
    let userService: UsersService;
    let utilsService: UtilsService;
    // const utilsServiceMock = {
    //     pluck: jest.fn(),
    // }
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                UsersService,
                UtilsService
                // {provide: UtilsService, useValue: utilsServiceMock}
            ],
        });

        userService = TestBed.inject(UsersService);
        utilsService = TestBed.inject(UtilsService);
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
    describe('getUsernames', () => {
        it('should get usernames', () => {
            jest.spyOn(utilsService, 'pluck');
            userService.users = [{id: '3', name: 'foo'}];
            userService.getUsernames();
            expect(utilsService.pluck).toHaveBeenCalledWith(
                userService.users,
                'name'
            )

            // utilsServiceMock.pluck.mockReturnValue(['foo']);
            // expect(userService.getUsernames()).toEqual(['foo']);
        })
    })
});