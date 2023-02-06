import { validateDataRoles } from "../src";
import { User, userMap, userMock, userWithoutInformationHidden } from "./__fixtures__";

describe("validateDataRoles", () => {
    it('should', () => {
        const objTransformed = validateDataRoles<User<string>>(userMock, userMap);

        expect(objTransformed).toEqual(userWithoutInformationHidden);
    });
});
