// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";

contract Planty is ERC721{
    string[] public ipfsHashs;
    uint public index = 0;

    constructor(
    ) ERC721("Planty", "PLANTY") {
    }

    function plantBirth(string memory _ipfsHash) public{
        ipfsHashs.push(_ipfsHash);
        uint _id = ipfsHashs.length;
        _mint(msg.sender, _id);
    }

}