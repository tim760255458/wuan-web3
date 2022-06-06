// // SPDX-License-Identifier: MIT

// pragma solidity ^0.8.0;

// // import "./access-control/Auth.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract Box is Ownable {
//     uint256 private _value;
//     // Auth private _auth;

//     event ValueChanged(uint256 value);

//     // constructor() {
//     //     _auth = new Auth(msg.sender);
//     // }

//     function store(uint256 value) public onlyOwner {
//         // require(_auth.isAdministrator(msg.sender), "Unauthorized");

//         _value = value;
//         emit ValueChanged(value);
//     }

//     function retrieve() public view returns (uint256) {
//         return _value;
//     }
// }

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Box {
    uint256 private _value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    // Stores a new value in the contract
    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
}
