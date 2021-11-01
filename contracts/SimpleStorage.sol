// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {

  address public owner;
  uint256 public storedData;

  /*constructor() public {
    owner = msg.sender;
  }*/

  constructor(uint256 _num) public {
    owner = msg.sender;
    storedData = _num;
  }

  function getStoredData () public view returns (uint256){
    return storedData;
  }

  function setStoredData (uint256 newValue) public {
    require(msg.sender == owner, "Only owner can set value");
    storedData = newValue;
  }
}
