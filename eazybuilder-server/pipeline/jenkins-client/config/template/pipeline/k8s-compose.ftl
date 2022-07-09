<#if project.profile?? &&project.deployType?? && project.deployType=='k8s' && project.profile.skipDeploy?string == "false" && !project.profile.restartDeploy && !project.profile.rollout>
                    //k8s deploy
                    stage('k8s deploy'){
                        steps {
                            echo '========k8s deploy start========'
                           <#if project.deployConfigList??>

                             <#if (project.profile.assignYaml??&& project.profile.assignYaml)||(project.profile.restartDeploy??&& project.profile.restartDeploy)||(project.profile.rollout??&& project.profile.rollout)>
                                script {

                                echo 'begin to use project assign yaml to deploy'
                                
                                echo 'start replace yaml'
                                
                               // sh 'sed -i \'s/<#noparse>${NAMESPACE}</#noparse>/${project.profile.nameSpace}/g\' k8s/*/*/*'
                                sh 'find ${project.profile.assignYamlPath!'k8s'} -type f -exec sed -i \'s/<#noparse>${NAMESPACE}</#noparse>/${project.profile.nameSpace}/g\' <#noparse>{}</#noparse> \\;'
                                
                                echo 'success replace yaml'
                                
                                //sh 'kubectl apply -f k8s/*.yaml -n ${project.profile.nameSpace}'
                                sh 'kubectl apply -R -f ${project.profile.assignYamlPath!'k8s'} -n ${project.profile.nameSpace}'
                                
                                echo 'success to use project assign yaml to deploy'
                                }
                           
                             <#else>
                               script {
                                echo 'begin download yaml from huawei obs,/obsutil/obsutil cp obs://ats-obs/${yamlId} /data/k8s-yaml/${project.name}/${project.name}.yaml'
   
                                sh '/obsutil/obsutil cp obs://ats-obs/${yamlId} /data/k8s-yaml/${project.name}/${project.name}.yaml'
                                echo 'begin kubectl apply -f /data/k8s-yaml/${project.name}/*.yaml'
                                sh 'kubectl apply -f /data/k8s-yaml/${project.name}/*.yaml'
                                echo 'end kubectl apply -f /data/k8s-yaml/${project.name}/*.yaml'
                               }
                               
                               </#if>
                           <#else>
                               script {
                                echo 'skip k8s deploy  or k8s yaml is null'
                              }
                           </#if>
                           echo '========k8s deploy end========'
                        }
                    }
</#if>