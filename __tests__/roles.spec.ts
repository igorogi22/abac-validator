import { userMock } from "./__fixtures__";
import { validateRoles } from '../src'


describe('validateRoles', () => {
    it("should return false if user don't have permission to test context", () => {
        expect(validateRoles(userMock.permissions, { context: 'teste', action: 'teste'})).toBe(false);
    });

    it("should return false if user don't have permission to test action on clients context", () => {
        expect(validateRoles(userMock.permissions, { context: 'clients', action: 'teste'})).toBe(false);
    });

    it('should return true if user has the permissions in context and action', () => {
        expect(validateRoles(userMock.permissions, { context: 'clients', action: 'create'})).toBe(true);
    });
});
