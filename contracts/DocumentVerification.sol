// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentVerification {
    // Event to emit when a document is stored
    event DocumentStored(bytes32 documentHash, address indexed owner);

    // Mapping to store document hashes
    mapping(bytes32 => bool) private documentHashes;

    // Store a document hash on the blockchain
    function storeDocumentHash(bytes32 _documentHash) public {
        require(!documentHashes[_documentHash], "Document already exists");

        // Mark this hash as stored
        documentHashes[_documentHash] = true;

        // Emit an event with the document hash and sender address
        emit DocumentStored(_documentHash, msg.sender);
    }

    // Check if a document hash is already stored
    function isHashStored(bytes32 _documentHash) public view returns (bool) {
        return documentHashes[_documentHash];
    }
}
