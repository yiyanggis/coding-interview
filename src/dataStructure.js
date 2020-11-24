import _ from "underscore"

class DataStructure{
	constructor(){

	}

	IsUnique_1_1(str){
		//implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
		var hash_table=[];
		for (var i = str.length - 1; i >= 0; i--) {
			if(!hash_table[str[i]]){
				hash_table[str[i]]=1
			}
			else{
				hash_table[str[i]]+=1
			}
			if(hash_table[str[i]]>1){
				return false
			}
		}
		return true
	}

	CheckPermutation_1_2(str1, str2){
		//1.2 given two strings, write a method to decide if one is a permutation of the other.
		var hash1=[], hash2=[];
		if(str1.length!=str2.length){
			return false
		}
		for (var i = str1.length - 1; i >= 0; i--) {
			if(!hash1[str(str1[i])]){
				hash1[str(str1[i])]=1
			}
			else{
				hash1[str(str1[i])]+=1
			}
		}

		for (var i = str2.length - 1; i >= 0; i--) {
			if(!hash2[str(str2[i])]){
				hash2[str(str2[i])]=1
			}
			else{
				hash2[str(str2[i])]+=1
			}
		}
		console.debug(hash1);
		console.debug(hash2);
		return _.isEqual(hash1,hash2);
	}

	URLify_1_3(str){
		//1.3 write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: if implementing in Java, please use a character array so that you can perform this operation in place)
	}

	PalindromePermutation_1_4(str){
		//1.4 Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or pharse that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
	}

	OneAway_1_5(str1, str2){
		//1.5 There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit away
	}

	StringCompression_1_6(str){
		//1.6 Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the compressed string would not become smaller than the original string. your method should return the original string. You can assume the string has only uppercase and lowercase letters.
	}

}


export default DataStructure;