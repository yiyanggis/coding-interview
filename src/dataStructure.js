import _ from "underscore"

class DataStructure{
	constructor(){

	}

	IsUnigue_1_1(str){
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

	CheckPermutation(str1, str2){
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

}

export default DataStructure;